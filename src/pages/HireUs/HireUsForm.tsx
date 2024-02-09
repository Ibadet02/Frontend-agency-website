import { useState } from "react";
import { StyledHireUsForm } from "../../styles/HireUs/HireUsForm.styled";
import HireUsFormContent from "./HireUsFormContent";
import { HireUsFormProps } from "./props";

const HireUsForm: React.FC<HireUsFormProps> = (props) => {
  const [formData, setFormData] = useState<{
    projectType: string[];
    budget: string;
    name: string;
    email: string;
  }>({
    projectType: [],
    budget: "",
    name: "",
    email: "",
  });
  const handleTickInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked, type, name } = event.target;
    if (type === "radio") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      if (checked) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: [...prevState.projectType, value],
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [name]: prevState.projectType.filter((item) => item !== value),
        }));
      }
    }
  };
  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // sendEmail(formData);
    console.log(formData);
    // Add your form submission logic here
  };
  return (
    <StyledHireUsForm onSubmit={handleSubmit}>
      <HireUsFormContent
        {...props}
        formData={formData}
        handleTickInputChange={handleTickInputChange}
        handleTextInputChange={handleTextInputChange}
        handleSubmit={handleSubmit}
      />
    </StyledHireUsForm>
  );
};

export default HireUsForm;
