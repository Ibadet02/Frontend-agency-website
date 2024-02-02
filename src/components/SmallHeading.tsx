import React from "react";
import { StyledSmallHeading } from "../styles/components/SmallHeading.styled";
import { SmallHeadingProps } from "./props";

const SmallHeading: React.FC<SmallHeadingProps> = ({text}) => {
  return <StyledSmallHeading>{text}</StyledSmallHeading>;
};

export default SmallHeading;
