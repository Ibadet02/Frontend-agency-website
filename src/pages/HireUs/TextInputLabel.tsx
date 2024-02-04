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
  return (
    <StyledTextInputLabel>
      <input
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
