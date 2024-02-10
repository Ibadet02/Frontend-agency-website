import React from "react";
import { StyledSmallHeading } from "../styles/components/SmallHeading.styled";
import { SmallHeadingProps } from "./props";
import Reveal from "./Animation/Reveal";

const SmallHeading: React.FC<SmallHeadingProps> = ({ text }) => {
  return (
    <Reveal>
      <StyledSmallHeading>{text}</StyledSmallHeading>
    </Reveal>
  );
};

export default SmallHeading;
