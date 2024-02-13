import styled, { RuleSet } from "styled-components";

export const StyledNumberedOrder = styled.div<{ $styles?: RuleSet<object> }>`
  @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
  font-family: "Kanit", sans-serif;
  font-size: 2rem;
  color: #3d72ff;
  ${({ $styles }) => $styles};
`;
