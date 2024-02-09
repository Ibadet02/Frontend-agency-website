import styled, { RuleSet } from "styled-components";
import { Theme } from "../../theme";

export const StyledMainDescription = styled.p<{
  $styles?: RuleSet<object>;
  theme: Theme;
}>`
  color: ${({ theme }) => theme.colors().mainDescription()};
  transition: color ${({ theme }) => theme.transitions.changeMode};
  font-size: 0.85rem;
  ${({ $styles }) => $styles};
`;
