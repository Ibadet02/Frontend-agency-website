import { pricingDesignInfoProps, priceGroupProps } from "../../data/Pricing";
import PriceGroup from "./PriceGroup";
import FAQ from "./FAQ";
import { StyledPage } from "../../styles/pages/index.styled";
import { StyledSection } from "../../styles/pages/Section.styled";
import DesignInfo from "../../components/DesignInfo";

const { first: firstDesignInfoProps, second: secondDesignInfoProps } =
  pricingDesignInfoProps;

const Pricing = () => {
  return (
    <StyledPage>
      <StyledSection>
        <DesignInfo {...firstDesignInfoProps} />
      </StyledSection>
      <StyledSection>
        <PriceGroup {...priceGroupProps} />
      </StyledSection>
      <StyledSection>
        <DesignInfo {...secondDesignInfoProps} />
      </StyledSection>
      <StyledSection>
        <FAQ />
      </StyledSection>
    </StyledPage>
  );
};

export default Pricing;
