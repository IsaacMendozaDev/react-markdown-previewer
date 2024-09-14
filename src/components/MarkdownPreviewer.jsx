import SplitPane, { Pane, SashContent } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

import {
  useRawMarkdown,
  usePaneSizes,
  useSplitDirection,
} from "../hooks/index";

import { MarkdownPreview, MarkdownEditor } from "./index";

function MarkdownPreviewer() {
  const { sizes, setSizes } = usePaneSizes();
  const { markdown, onChange } = useRawMarkdown();
  const { splitDirection } = useSplitDirection();

  return (
    <SplitPane
      split={splitDirection}
      sizes={sizes}
      onChange={setSizes}
      sashRender={(index, active) => (
        <SashContent
          className={`sash-wrap-line ${active ? "active" : "inactive"}`}
        >
          <span className="line" />
        </SashContent>
      )}
    >
      <Pane maxSize="75%">
        <MarkdownEditor markdown={markdown} onChange={onChange} />
      </Pane>
      <Pane maxSize="75%">
        <MarkdownPreview markdown={markdown} />
      </Pane>
    </SplitPane>
  );
}

export default MarkdownPreviewer;
