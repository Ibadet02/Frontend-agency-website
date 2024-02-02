import styled, { RuleSet } from "styled-components";

export const StyledFeedback = styled.div<{ $styles?: RuleSet<object> }>`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  ${({ $styles }) => $styles};
  .feedback-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`;
