import { hireUsDesignInfoProps, hireUsForm } from "../../data/HireUs";
import HireUsForm from "./HireUsForm";
import { StyledPage } from "../../styles/pages/index.styled";
import { StyledSection } from "../../styles/pages/Section.styled";
import DesignInfo from "../../components/DesignInfo";

const { first: firstDesignInfoProps } = hireUsDesignInfoProps;

const HireUs = () => {
  return (
    <StyledPage>
      <StyledSection>
        <DesignInfo {...firstDesignInfoProps} />
      </StyledSection>
      <HireUsForm {...hireUsForm} />
    </StyledPage>
  );
};

export default HireUs;
