import styled, { RuleSet } from "styled-components";

export const StyledDesignInfoGroup = styled.div<{
  $styles?: RuleSet<object>;
  $flexBasis: "50%" | "auto";
}>`
  ${({ $styles }) => $styles};
  flex-basis: ${({ $flexBasis }) => $flexBasis};
  @media screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
