import { useEffect, useRef } from "react";
import { StyledProgressBar } from "../styles/components/ProgressBar.styled";

const ProgressBar = () => {
  const preLoaderRef = useRef(null);
  useEffect(() => {
    const handleDocumentReadyState = () => {
      if (document.readyState === "complete") {
        const preLoaderBar = preLoaderRef.current as HTMLElement | null;
        if (preLoaderBar) {
          preLoaderBar.style.display = "none";
        }
      }
    };
    document.addEventListener("readystatechange", handleDocumentReadyState);

    return () => {
      document.removeEventListener(
        "readystatechange",
        handleDocumentReadyState
      );
    };
  }, []);

  return (
    <StyledProgressBar id="PreLoaderBar" ref={preLoaderRef}>
      <div className="indeterminate" />
    </StyledProgressBar>
  );
};

export default ProgressBar;
