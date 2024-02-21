import React from "react";
import { StyledPriceGroup } from "../../styles/pages/Pricing/PriceGroup.styled";
import { PriceGroupProps } from "./props";
import Price from "./Price";

const PriceGroup: React.FC<PriceGroupProps> = ({ pricesProps }) => {
  return (
    <StyledPriceGroup>
      {pricesProps.map((priceProps) => {
        return <Price key={priceProps.id} {...priceProps} />;
      })}
    </StyledPriceGroup>
  );
};

export default PriceGroup;
