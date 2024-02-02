import styled, { RuleSet } from "styled-components";

export const StyledFeedbacksController = styled.div<{
  $styles?: RuleSet<object>;
}>`
  width: 20rem;
  img {
    width: 3rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
  }
  ${({ $styles }) => $styles};
`;
