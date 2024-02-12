import styled, { RuleSet } from "styled-components";

export const StyledImageDemonstrator = styled.div<{
  $styles?: RuleSet<object>;
}>`
  @media screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr;
    align-self: center;
    figure {
      margin: 0;
    }
  }
  ${({ $styles }) => $styles};
`;
