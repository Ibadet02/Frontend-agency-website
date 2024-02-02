import React from "react";
import { StyledNewsLetterInput } from "../styles/components/NewsLetterInput.styled";
import MainButton from "./MainButton";
import { MainButtonProps } from "./props";
import { css } from "styled-components";
const mainButtonProps: MainButtonProps = {
  text: "Subscribe",
  styles: css`
    width: 100%;
    height: 100%;
  `,
};
const NewsLetterInput = () => {
  return (
    <StyledNewsLetterInput>
      <input type="email" placeholder="Your email address" />
      <div className="button-wrapper">
        <MainButton {...mainButtonProps} />
      </div>
    </StyledNewsLetterInput>
  );
};

export default NewsLetterInput;
