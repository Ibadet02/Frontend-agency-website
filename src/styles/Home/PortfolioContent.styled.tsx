import styled, { RuleSet } from "styled-components";

export const StyledPortfolioContent = styled.div<{ $styles?: RuleSet<object> }>`
  width: 75rem;
  padding-inline: 1rem;
  ${({ $styles }) => $styles};
`;
