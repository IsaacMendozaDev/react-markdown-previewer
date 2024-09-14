// eslint-disable-next-line react/prop-types
function MarkdownEditor({ markdown, onChange }) {
  return (
    <textarea
      id="editor"
      onChange={onChange}
      value={markdown}
      aria-label="Markdown input"
    />
  );
}

export default MarkdownEditor;
