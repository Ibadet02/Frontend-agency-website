import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
// import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
const options = {
  damping: 0.1,
//   thumbMinSize: 20,
//   renderByPixels: true,
//   alwaysShowTracks: false,
//   continuousScrolling: true,
};

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);
  return null;
};

export default SmoothScroll;
