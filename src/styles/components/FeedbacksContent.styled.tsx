import styled, { RuleSet } from "styled-components";

export const StyledFeedbacksContent = styled.div<{ $styles?: RuleSet<object> }>`
  width: 75rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-inline: 1rem;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: flex-start;
  }
  ${({ $styles }) => $styles};
`;
