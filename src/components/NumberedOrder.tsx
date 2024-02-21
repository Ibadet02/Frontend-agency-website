import React from "react";
import { StyledNumberedOrder } from "../styles/components/NumberedOrder.styled";
import { NumberedOrderProps } from "./props";
import Reveal from "./Animation/Reveal";

const NumberedOrder: React.FC<NumberedOrderProps> = ({
  numberContent,
  styles,
}) => {
  return (
    <StyledNumberedOrder className="numberedOrder" $styles={styles}>
      <Reveal>
        <strong>{numberContent}</strong>
      </Reveal>
    </StyledNumberedOrder>
  );
};

export default NumberedOrder;
