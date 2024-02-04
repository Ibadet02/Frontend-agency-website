import styled, { RuleSet } from "styled-components";

export const StyledMainButton = styled.button<{ $styles?: RuleSet<object> }>`
  ${({ $styles }) => $styles};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0.1rem solid #3C71FF;
  border-radius: 2rem;
  background-color: #3C71FF;
  outline-color: #3C71FF;
  cursor: pointer;
  transition: 0.3s;
  color: #fff;
  font-size: 1.3rem;
  &:hover {
    background-color: #fff;
    color: #3C71FF;
  }
`;
