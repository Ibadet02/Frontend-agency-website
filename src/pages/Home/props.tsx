import { RuleSet } from "styled-components";
import { DesignInfoProps, InfoImageGroupProps } from "../../components/props";

export interface PortfolioProps {
  designInfoProps: DesignInfoProps;
  infoImageGroupProps: InfoImageGroupProps;
  styles?: RuleSet<object>;
}

export type PortfolioContentProps = PortfolioProps;
