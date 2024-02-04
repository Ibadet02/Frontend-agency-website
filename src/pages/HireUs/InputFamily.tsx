import { StyledInputFamily } from "../../styles/HireUs/InputFamily.styled";
import InputGroup from "./InputGroup";
import { InputFamilyProps } from "./props";

const InputFamily: React.FC<InputFamilyProps> = ({
  heading,
  children,
  projectType,
  radioValue,
  handleTickInputChange,
}) => {
  return (
    <StyledInputFamily>
      <p>{heading}</p>
      <InputGroup
        tickInputLabels={children}
        projectType={projectType}
        radioValue={radioValue}
        handleTickInputChange={handleTickInputChange}
      />
    </StyledInputFamily>
  );
};

export default InputFamily;
