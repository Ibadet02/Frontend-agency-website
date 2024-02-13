import React from "react";
import { StyledSmallHeading } from "../styles/components/SmallHeading.styled";
import { SmallHeadingProps } from "./props";
import TypeEffect from "./Animation/TypeEffect";

const SmallHeading: React.FC<SmallHeadingProps> = ({ text }) => {
  return (
    <TypeEffect>
      <StyledSmallHeading id="small-heading">{text}</StyledSmallHeading>
    </TypeEffect>
  );
};

export default SmallHeading;
