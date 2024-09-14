import { useMemo } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

function useRenderedMarkdown(markdown) {
  const renderedMarkdown = useMemo(() => {
    const rawMarkup = marked(markdown, { gfm: true, breaks: true });
    return DOMPurify.sanitize(rawMarkup);
  }, [markdown]);

  return { renderedMarkdown: renderedMarkdown };
}

export default useRenderedMarkdown;
