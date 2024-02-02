import styled, { RuleSet } from "styled-components";

export const StyledContentHeading = styled.div<{
  $mutualStyles?: RuleSet<object>;
}>`
  ${(props) => props.$mutualStyles};
  .content-heading {
    position: relative;
    display: inline;
    text-decoration: none;
    color: #fff;
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
