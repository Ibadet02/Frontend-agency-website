import styled, { RuleSet } from "styled-components";

export const StyledHeading = styled.h4<{ $styles?: RuleSet<object> }>`
  color: #fff;
  font-size: 1.25rem;
  ${({ $styles }) => $styles};
`;
