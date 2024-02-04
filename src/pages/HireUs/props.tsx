export interface FormDataType {
  projectType: string[];
  budget: string;
  name: string;
  email: string;
}
export interface TickInputLabelProps {
  type: "radio" | "checkbox";
  name: string;
  value: string;
  children: string;
  projectType?: string[];
  radioValue?: string;
  id: number;
  handleTickInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextInputLabelProps {
  type: "text" | "email";
  name: string;
  value: string;
  children: string;
  textInputValue?: string;
  emailInputValue?: string;
  handleTextInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputGroupProps {
  tickInputLabels: TickInputLabelProps[];
  projectType?: string[];
  radioValue?: string;
  handleTickInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputFamilyProps {
  heading: string;
  children: TickInputLabelProps[];
  projectType?: string[];
  radioValue?: string;
  handleTickInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface HireUsFormContentProps {
  firstInputFamily: InputFamilyProps;
  secondInputFamily: InputFamilyProps;
  nameInputProps: TextInputLabelProps;
  emailInputProps: TextInputLabelProps;
  formData: FormDataType;
  handleTickInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface HireUsFormProps {
  firstInputFamily: InputFamilyProps;
  secondInputFamily: InputFamilyProps;
  nameInputProps: TextInputLabelProps;
  emailInputProps: TextInputLabelProps;
}
