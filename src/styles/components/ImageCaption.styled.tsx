import styled, { RuleSet } from "styled-components";

export const StyledImageCaption = styled.figcaption<{
  $styles?: RuleSet<object>;
}>`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  .caption-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${({ $styles }) => $styles};
`;
