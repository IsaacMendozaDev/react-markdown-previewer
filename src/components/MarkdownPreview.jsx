import { useRenderedMarkdown } from "../hooks/index";
import { markdownToHtml } from "../utils/markdownToHtml";

// eslint-disable-next-line react/prop-types
function MarkdownPreview({ markdown }) {
  const { renderedMarkdown } = useRenderedMarkdown(markdown);

  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={markdownToHtml(renderedMarkdown)}
      aria-live="polite"
    />
  );
}

export default MarkdownPreview;
