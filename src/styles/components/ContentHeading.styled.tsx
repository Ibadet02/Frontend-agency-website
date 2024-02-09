import styled, { RuleSet } from "styled-components";
import { Theme } from "../../theme";

export const StyledContentHeading = styled.div<{
  $mutualStyles?: RuleSet<object>;
  theme: Theme;
}>`
  ${(props) => props.$mutualStyles};
  .content-heading {
    position: relative;
    display: inline;
    text-decoration: none;
    color: ${({ theme }) => theme.colors().contentHeading};
    transition: ${({ theme }) => theme.transitions.changeMode};
    font-weight: 600;
    .dot {
      position: absolute;
      right: -0.4rem;
      bottom: 0;
      width: 0.4rem;
      height: 0.4rem;
      background-color: #3c71ff;
      border-radius: 50%;
    }
  }
`;
