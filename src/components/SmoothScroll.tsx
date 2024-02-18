import React, { ReactNode, useEffect, useRef } from "react";

import useWindowSize from "../hooks/useWindowSize";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./Buttons/ScrollToTop";

const SmoothScroll: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1.
  const windowSize = useWindowSize();
  const location = useLocation();
  //2.
  const scrollingContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (scrollingContainerRef.current) {
        document.body.style.height = `${
          scrollingContainerRef.current.getBoundingClientRect().height
        }px`;
      }
    };

    handleResize(); // Initial setup

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // 4.

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current?.getBoundingClientRect().height
    }px`;
  };
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height, location]);

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    scrollingContainerRef.current!.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div
      className="parent"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <ScrollToTop />
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
