import { StyledPricing } from "../../styles/Pricing/index.styled";
import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import { pricingDesignInfoWrappers, priceGroupProps } from "../../data/Pricing";
import PriceGroup from "./PriceGroup";
import FAQ from "./FAQ";
const {
  first: firstDesignInfoWrapperProps,
  second: secondDesignInfoWrapperProps,
} = pricingDesignInfoWrappers;
const Pricing = () => {
  return (
    <StyledPricing>
      <DesignInfoWrapper {...firstDesignInfoWrapperProps} />
      <PriceGroup {...priceGroupProps} />
      <DesignInfoWrapper {...secondDesignInfoWrapperProps} />
      <FAQ />
    </StyledPricing>
  );
};

export default Pricing;
