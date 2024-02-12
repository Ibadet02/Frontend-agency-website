import styled, { RuleSet } from "styled-components";
import { Theme } from "../../theme";

export const StyledPortfolioContent = styled.div<{
  $styles?: RuleSet<object>;
  theme: Theme;
}>`
  ${({ theme }) => theme.contentStyles};
  ${({ $styles }) => $styles};
`;
