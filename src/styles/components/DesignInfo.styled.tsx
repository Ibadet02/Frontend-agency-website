import styled, { RuleSet } from "styled-components";

export const StyledDesignInfo = styled.div<{
  $styles?: RuleSet<object>;
  $flexBasis?: "50%" | "auto";
}>`
  gap: 1.5rem;
  flex-basis: ${({ $flexBasis }) => $flexBasis};
  ${({ $styles }) => $styles};
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  .design-img {
    width: 3rem;
    height: 3rem;
    margin-bottom: 0.5rem;
  }
`;
