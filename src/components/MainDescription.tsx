import React from "react";
import { StyledMainDescription } from "../styles/components/MainDescription.styled";
import { MainDescriptionProps } from "./props";
import Reveal from "./Animation/Reveal";

const MainDescription: React.FC<MainDescriptionProps> = ({ text, styles }) => {
  return (
    <StyledMainDescription $styles={styles}>
      <Reveal withSlide>{text}</Reveal>
    </StyledMainDescription>
  );
};

export default MainDescription;
