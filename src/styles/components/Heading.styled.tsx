import styled, { RuleSet } from "styled-components";
import { Theme } from "../../theme";

export const StyledHeading = styled.h4<{
  $styles?: RuleSet<object>;
  theme: Theme;
}>`
  @import url("https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap");
  font-family: "Protest Strike", sans-serif;
  color: ${({ theme }) => theme.colors().heading()};
  transition: color ${({ theme }) => theme.transitions.changeMode};
  font-size: 1.25rem;
  ${({ $styles }) => $styles};
`;
