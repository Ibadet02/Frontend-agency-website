import { StyledInputGroup } from "../../styles/HireUs/InputGroup.styled";
import TickInputLabel from "./TickInputLabel";
import { InputGroupProps } from "./props";

const InputGroup: React.FC<InputGroupProps> = ({
  tickInputLabels,
  projectType,
  radioValue,
  handleTickInputChange,
}) => {
  return (
    <StyledInputGroup>
      {tickInputLabels.map((tickInputLabel) => {
        return (
          <TickInputLabel
            key={tickInputLabel.id}
            {...tickInputLabel}
            projectType={projectType}
            radioValue={radioValue}
            handleTickInputChange={handleTickInputChange}
          />
        );
      })}
    </StyledInputGroup>
  );
};

export default InputGroup;
