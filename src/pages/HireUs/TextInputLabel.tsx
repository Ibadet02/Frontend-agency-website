import { StyledTextInputLabel } from "../../styles/HireUs/TextInputLabel.styled";
import { TextInputLabelProps } from "./props";

const TextInputLabel: React.FC<TextInputLabelProps> = ({
  type,
  name,
  children,
  textInputValue,
  emailInputValue,
  handleTextInputChange,
}) => {
  const inputValue = type === "text" ? textInputValue : emailInputValue;
  const isInputEmpty = inputValue === "";
  return (
    <StyledTextInputLabel className={`${!isInputEmpty && 'filled'}`}>
      <input
        // required
        type={type}
        name={name}
        value={inputValue}
        onChange={handleTextInputChange}
      />
      <span>{children}</span>
    </StyledTextInputLabel>
  );
};

export default TextInputLabel;
