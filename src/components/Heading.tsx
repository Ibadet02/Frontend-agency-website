import React from "react";
import { StyledHeading } from "../styles/components/Heading.styled";
import { HeadingProps } from "./props";

const Heading: React.FC<HeadingProps> = ({ text, styles }) => {
  return <StyledHeading $styles={styles}>{text}</StyledHeading>;
};

export default Heading;
