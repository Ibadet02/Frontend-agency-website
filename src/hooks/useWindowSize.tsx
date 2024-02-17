// import { useState, useEffect } from "react";

// export default function useWindowSize() {
//   const getSize = () => {
//     return {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   };

//   const [windowSize, setWindowSize] = useState(getSize);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize(getSize());
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowSize;
// }


import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useWindowSize() {
  const location = useLocation();

  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    setWindowSize(getSize());

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location]); // Added location as a dependency

  return windowSize;
}