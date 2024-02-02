import React from "react";
import { StyledNumberedOrder } from "../styles/components/NumberedOrder.styled";
import { NumberedOrderProps } from "./props";

const NumberedOrder: React.FC<NumberedOrderProps> = ({ numberContent, styles }) => {
  return (
    <StyledNumberedOrder $styles = {styles}>
      <strong>{numberContent}</strong>
    </StyledNumberedOrder>
  );
};

export default NumberedOrder;
