import styled, { RuleSet } from "styled-components";

export const StyledInfoImage = styled.figure<{ $styles?: RuleSet<object> }>`
  ${({ $styles }) => $styles};
`;
