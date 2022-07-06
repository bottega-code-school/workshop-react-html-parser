import * as React from "react";
import Editor from "@monaco-editor/react";

type Props = {
  content: string;
  setContent: (content: string) => void;
};
export default function CodeEditor({ content, setContent }: Props) {
  const ref = React.useRef(null);

  function handleEditorChange(editorValue: string, _event: any) {
    // console.log("here is the current model value:", editorValue);
    try {
      setContent(editorValue);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div
      className="flex-center"
      style={{
        padding: "15px",
        borderRadius: "5px",
        backgroundColor: "#1e1e1e",
        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.09)",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <Editor
        height={"calc(100vh - 300px)"}
        width={"600px"}
        defaultLanguage="html"
        value={content}
        language="html"
        defaultValue={""}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          formatOnPaste: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}
