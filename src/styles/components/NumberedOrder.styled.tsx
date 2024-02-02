import styled, { RuleSet } from "styled-components";

export const StyledNumberedOrder = styled.p<{ $styles?: RuleSet<object> }>`
  font-size: 2rem;
  color: #3d72ff;
  ${({ $styles }) => $styles};
`;
