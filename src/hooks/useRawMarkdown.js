import { useState } from "react";
import initialMarkdown from "../data/initialMarkdown.js";

function useRawMarkdown() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return { markdown: markdown, onChange: handleInputChange };
}

export default useRawMarkdown;
