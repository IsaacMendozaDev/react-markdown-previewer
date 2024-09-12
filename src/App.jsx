import { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";

import "split-pane-react/esm/themes/default.css";

function App() {
  const [sizes, setSizes] = useState([50, 50]);

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={{ height: "100dvh" }}>
      <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
        <Pane maxSize="75%">
          <div style={{ ...layoutCSS, background: "#fff" }}>pane1</div>
        </Pane>
        <Pane maxSize="75%">
          <div style={{ ...layoutCSS, background: "#eee" }}>pane1</div>
        </Pane>
      </SplitPane>
    </div>
  );
}

export default App;

/* import { useState, useMemo } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { Header } from "./components/Header";

const initialMarkdown =
  "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  const createMarkup = useMemo(() => {
    const rawMarkup = marked(markdown, { gfm: true, breaks: true });
    return { __html: DOMPurify.sanitize(rawMarkup) };
  }, [markdown]);

  return (
    <>
      <Header />
      <main>
        <textarea
          id="editor"
          onChange={handleInputChange}
          value={markdown}
          aria-label="Markdown input"
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={createMarkup}
          aria-live="polite"
        />
      </main>
    </>
  );
} */
