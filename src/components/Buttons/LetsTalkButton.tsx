import React from "react";
import { StyledLetsTalkButton } from "../../styles/components/Buttons/LetsTalkButton.styled";
import { LetsTalkButtonProps } from "./props";
import Reveal from "../Animation/Reveal";

const LetsTalkButton: React.FC<LetsTalkButtonProps> = ({
  title,
  path,
  styles,
}) => {
  return (
    <Reveal withSlide>
      <StyledLetsTalkButton $styles={styles} to={path!}>
        <span className="button-content">{title}</span>
      </StyledLetsTalkButton>
    </Reveal>
  );
};

export default LetsTalkButton;
