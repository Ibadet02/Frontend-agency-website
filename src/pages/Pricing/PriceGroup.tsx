import React from "react";
import { StyledPriceGroup } from "../../styles/Pricing/PriceGroup.styled";
import PriceGroupContent from "./PriceGroupContent";
import { PriceGroupProps } from "./props";

const PriceGroup: React.FC<PriceGroupProps> = (priceGroupContentProps) => {
  return (
    <StyledPriceGroup>
      <PriceGroupContent {...priceGroupContentProps} />
    </StyledPriceGroup>
  );
};

export default PriceGroup;
