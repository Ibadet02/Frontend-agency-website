import React from "react";
import { StyledTypeEffect } from "../../styles/components/Animation/TypeEffect.styled";
import { TypeEffectProps } from "./props";

const TypeEffect: React.FC<TypeEffectProps> = ({ children }) => {
  return <StyledTypeEffect>{children}</StyledTypeEffect>;
};

export default TypeEffect;
