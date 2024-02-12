import styled, { RuleSet } from "styled-components";
import { Theme } from "../../theme";

export const StyledContentHeading = styled.div<{
  $mutualStyles?: RuleSet<object>;
  theme: Theme;
}>`
  @import url("https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap");
  font-family: "Protest Strike", sans-serif;
  ${(props) => props.$mutualStyles};
  overflow: visible;
  .content-heading {
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors().contentHeading()};
    transition: ${({ theme }) => theme.transitions.changeMode};
    width: fit-content;
    .dot {
      color: ${({ theme }) => theme.colors().mainBlue};
    }
  }
`;
