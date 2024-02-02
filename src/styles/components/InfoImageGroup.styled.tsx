import styled, { RuleSet } from "styled-components";

export const StyledInfoImageGroup = styled.div<{ $styles?: RuleSet<object> }>`
  ${({ $styles }) => $styles};
  @media screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
