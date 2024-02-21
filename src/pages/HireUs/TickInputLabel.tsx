import { StyledTickInputLabel } from "../../styles/pages/HireUs/TickInputLabel.styled";
import { TickInputLabelProps } from "./props";

const TickInputLabel: React.FC<TickInputLabelProps> = ({
  type,
  name,
  value,
  children,
  projectType,
  radioValue,
  handleTickInputChange,
}) => {
  const checked =
    type === "checkbox"
      ? projectType?.includes(value)
      : radioValue === value;
  return (
    <StyledTickInputLabel>
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={handleTickInputChange}
      />
      <span>{children}</span>
    </StyledTickInputLabel>
  );
};

export default TickInputLabel;
