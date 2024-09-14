import { useEffect, useState } from "react";

function useSplitDirection() {
  const [splitDirection, setSplitDirection] = useState("vertical");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setSplitDirection("horizontal");
      } else {
        setSplitDirection("vertical");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { splitDirection };
}

export default useSplitDirection;
