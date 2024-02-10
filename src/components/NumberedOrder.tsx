import React from "react";
import { StyledNumberedOrder } from "../styles/components/NumberedOrder.styled";
import { NumberedOrderProps } from "./props";
import Reveal from "./Animation/Reveal";

const NumberedOrder: React.FC<NumberedOrderProps> = ({
  numberContent,
  styles,
}) => {
  return (
    <Reveal>
      <StyledNumberedOrder $styles={styles}>
        <strong>{numberContent}</strong>
      </StyledNumberedOrder>
    </Reveal>
  );
};

export default NumberedOrder;
