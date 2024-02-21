import React from "react";
import { StyledPortfolio } from "../../styles/pages/Home/Portfolio.styled";
import { PortfolioProps } from "./props";
import DesignInfo from "../../components/DesignInfo";
import InfoImageGroup from "../../components/InfoImageGroup";

const Portfolio: React.FC<PortfolioProps> = ({
  designInfoProps,
  infoImageGroupProps,
  styles,
}) => {
  return (
    <StyledPortfolio $styles={styles}>
      <DesignInfo {...designInfoProps} />
      <InfoImageGroup {...infoImageGroupProps} />
    </StyledPortfolio>
  );
};

export default Portfolio;
