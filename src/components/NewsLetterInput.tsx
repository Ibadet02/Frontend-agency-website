
import { css } from "styled-components";
import { StyledNewsLetterInput } from "../styles/components/NewsLetterInput.styled";
// import MainButton from "./MainButton";
import MainButton from "./Buttons/MainButton";
import { MainButtonProps } from "./props";
const mainButtonProps: MainButtonProps = {
  text: "Subscribe",
  styles: css`
    height: 100%;
    width: 100%;
  `
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
