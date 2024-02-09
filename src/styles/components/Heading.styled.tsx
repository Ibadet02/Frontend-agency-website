import styled, { RuleSet } from "styled-components";
import { Theme } from "../../theme";

export const StyledHeading = styled.h4<{
  $styles?: RuleSet<object>;
  theme: Theme;
}>`
  color: ${({ theme }) => theme.colors().heading()};
  transition: color ${({ theme }) => theme.transitions.changeMode};
  font-size: 1.25rem;
  ${({ $styles }) => $styles};
`;
