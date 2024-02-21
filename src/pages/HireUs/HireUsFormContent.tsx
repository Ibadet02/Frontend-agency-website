import { css } from "styled-components";
import { StyledHireUsFormContent } from "../../styles/pages/HireUs/HireUsFormContent.styled";
import InputFamily from "./InputFamily";
import TextInputLabel from "./TextInputLabel";
import { HireUsFormContentProps } from "./props";
import MainButton from "../../components/Buttons/MainButton";
const submitButtonStyles = css`
  width: min-content;
  padding: 0.7rem 1.4rem;
`;
const HireUsFormContent: React.FC<HireUsFormContentProps> = ({
  firstInputFamily,
  secondInputFamily,
  nameInputProps,
  emailInputProps,
  formData,
  handleTickInputChange,
  handleTextInputChange,
}) => {
  return (
    <StyledHireUsFormContent>
      <InputFamily
        {...firstInputFamily}
        projectType={formData.projectType}
        handleTickInputChange={handleTickInputChange}
      />
      <InputFamily
        {...secondInputFamily}
        radioValue={formData.budget}
        handleTickInputChange={handleTickInputChange}
      />
      <TextInputLabel
        {...nameInputProps}
        textInputValue={formData.name}
        handleTextInputChange={handleTextInputChange}
      />
      <TextInputLabel
        {...emailInputProps}
        emailInputValue={formData.email}
        handleTextInputChange={handleTextInputChange}
      />
      <MainButton
        text="Send"
        styles={submitButtonStyles}
      />
    </StyledHireUsFormContent>
  );
};

export default HireUsFormContent;
