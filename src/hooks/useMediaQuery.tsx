import { useEffect, useState } from "react";

const useMediaQuery = (breakPoint: number): boolean => {
  const initialWidth = window.outerWidth;
  const [isLessThanBreakPoint, setIsLessThanBreakPoint] = useState<boolean>(
    initialWidth < breakPoint
  );
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.outerWidth;
      setIsLessThanBreakPoint(windowWidth < breakPoint);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isLessThanBreakPoint;
};

export default useMediaQuery;
