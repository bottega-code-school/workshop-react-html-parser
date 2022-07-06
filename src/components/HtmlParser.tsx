import * as React from "react";
import parse, { domToReact } from "html-react-parser";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

type ParserProps = {
  html: string;
};
export const HtmlParser = ({ html }: ParserProps) => {
  const options = {
    // @ts-ignore
    replace: ({ attribs, children, name }) => {
      if (!attribs) {
        return;
      }
      if (name === "a" && attribs.href) {
        if (
          !attribs.href.startsWith("http") &&
          !attribs.href.startsWith("mailto") &&
          !attribs.href.startsWith("tel")
        ) {
          const routePath = attribs.href.startsWith("/")
            ? attribs.href
            : `/${attribs.href}`;
          return <Link to={routePath}>{domToReact(children)}</Link>;
        } else {
          return (
            <a href={attribs.href} target="_blank" className="external-link">
              {domToReact(children)}

              <div className="icon">
                <BiLinkExternal />
              </div>
            </a>
          );
        }
      }
    },
  };

  return (
    <div>
      {/* @ts-ignore */}
      {parse(html, options)}
    </div>
  );
};
