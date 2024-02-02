import styled, { RuleSet } from "styled-components";

export const StyledMainDescription = styled.p<{ $styles?: RuleSet<object> }>`
  color: #97989c;
  font-size: .85rem;
  ${({ $styles }) => $styles};
`;
