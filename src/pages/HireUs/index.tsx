import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import { StyledHireUs } from "../../styles/HireUs/index.styled";
import { hireUsDesignInfoWrappers, hireUsForm } from "../../data/HireUs";
import HireUsForm from "./HireUsForm";

const { first: firstDesignInfoWrapperProps } = hireUsDesignInfoWrappers;

const HireUs = () => {
  return (
    <StyledHireUs>
      <DesignInfoWrapper {...firstDesignInfoWrapperProps} />
      <HireUsForm {...hireUsForm} />
    </StyledHireUs>
  );
};

export default HireUs;
