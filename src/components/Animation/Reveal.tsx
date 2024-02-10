import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
const Reveal: React.FC<RevealProps> = ({
  children,
  width = "fit-content",
  withSlide,
}) => {
  const theme = useTheme() as Theme;
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      if (withSlide) {
        slideControls.start("visible");
      }
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: width,
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {withSlide && (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: theme.colors().mainBlue,
            zIndex: 20,
          }}
        />
      )}
    </div>
  );
};

export default Reveal;
