import styled, { RuleSet } from "styled-components";

export const StyledBannerContent = styled.div<{ $styles?: RuleSet<object> }>`
  ${({ $styles }) => $styles};
  display: flex;
  width: 75rem;
  padding-inline: 1rem;
`;
