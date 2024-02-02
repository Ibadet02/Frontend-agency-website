import React from "react";
import { StyledMainButton } from "../styles/components/MainButton.styled";
import { MainButtonProps } from "./props";

const MainButton: React.FC<MainButtonProps> = ({text, styles}) => {
  return (
    <StyledMainButton $styles={styles}>
      <span className="text">{text}</span>
      <span className="text">{">"}</span>
    </StyledMainButton>
  );
};

export default MainButton;
