import React from "react";
import { StyledTypeEffect } from "../../styles/components/Animation/TypeEffect.styled";
import { TypeEffectProps } from "./props";

const TypeEffect: React.FC<TypeEffectProps> = ({ children, letterCount }) => {
  return (
    <StyledTypeEffect $letterCount={letterCount}>{children}</StyledTypeEffect>
  );
};

export default TypeEffect;
