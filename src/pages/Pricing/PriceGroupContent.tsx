import React from "react";
import { StyledPriceGroupContent } from "../../styles/Pricing/PriceGroupContent.styled";
import { PriceGroupContentProps } from "./props";
import Price from "./Price";

const PriceGroupContent: React.FC<PriceGroupContentProps> = ({
  pricesProps,
}) => {
  return (
    <StyledPriceGroupContent>
      {pricesProps.map((priceProps) => {
        return <Price key={priceProps.id} {...priceProps} />;
      })}
    </StyledPriceGroupContent>
  );
};

export default PriceGroupContent;
