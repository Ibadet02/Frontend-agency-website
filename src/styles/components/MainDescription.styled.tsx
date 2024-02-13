import styled, { RuleSet } from "styled-components";
import { Theme } from "../../theme";

export const StyledMainDescription = styled.div<{
  $styles?: RuleSet<object>;
  theme: Theme;
}>`
  @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
  font-family: "Kanit", sans-serif;
  color: ${({ theme }) => theme.colors().mainDescription()};
  transition: color ${({ theme }) => theme.transitions.changeMode};
  font-size: .85rem;
  ${({ $styles }) => $styles};
`;
