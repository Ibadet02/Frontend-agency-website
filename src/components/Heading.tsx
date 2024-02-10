import React from "react";
import { StyledHeading } from "../styles/components/Heading.styled";
import { HeadingProps } from "./props";
import Reveal from "./Animation/Reveal";

const Heading: React.FC<HeadingProps> = ({ text, styles }) => {
  return (
    <Reveal withSlide>
      <StyledHeading $styles={styles}>{text}</StyledHeading>
    </Reveal>
  );
};

export default Heading;
