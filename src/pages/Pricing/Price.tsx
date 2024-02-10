import React from "react";
import { StyledPrice } from "../../styles/Pricing/Price.styled";
import { PriceProps } from "./props";
import SmallHeading from "../../components/SmallHeading";
import Heading from "../../components/Heading";
import MainDescription from "../../components/MainDescription";
import TaskGroup from "../../components/TaskGroup";
import ActionLink from "../../components/ActionLink";

const Price: React.FC<PriceProps> = ({
  smallHeadingProps,
  price,
  duration,
  descriptionProps,
  taskGroupProps,
  actionLinkProps,
  id,
}) => {
  return (
    <StyledPrice className={`${id === 1 && 'popular'}`}>
      <SmallHeading {...smallHeadingProps} />
      <div className="price-duration--info">
        <Heading {...price} />
        <MainDescription {...duration} />
      </div>
      <MainDescription {...descriptionProps} />
      <TaskGroup {...taskGroupProps} />
      <ActionLink {...actionLinkProps} />
    </StyledPrice>
  );
};

export default Price;
