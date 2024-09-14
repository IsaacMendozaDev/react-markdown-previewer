import { useState } from "react";

function usePaneSizes() {
  const [sizes, setSizes] = useState([50, 50]);

  return { sizes: sizes, setSizes: setSizes };
}

export default usePaneSizes;
