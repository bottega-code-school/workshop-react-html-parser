import * as React from "react";
import Layout from "./Layout";

import CodeEditor from "./CodeEditor";
import { HtmlParser } from "./HtmlParser";

const initialCode = `<!-- HTML -->

<div class="html-content">
  <img
    src="https://picsum.photos/300"
    alt="Random image"
    class="image"
  />

  <div class="content-title">Hey World</div>

  <a href="https://amazon.devcamp.com/public-profile/jordan">
    External URL
  </a>

  <a href="/contact">
    Contact
  </a>
</div>
`;

export default function Home() {
  const [content, setContent] = React.useState(initialCode);
  return (
    <Layout>
      <div className="grid-2">
        <CodeEditor content={content} setContent={setContent} />

        <HtmlParser html={content} />
      </div>
    </Layout>
  );
}
