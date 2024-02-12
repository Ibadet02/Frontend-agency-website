import styled, { RuleSet } from "styled-components";

export const StyledMainButton = styled.button<{ $styles?: RuleSet<object> }>`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
  font-family: "Josefin Sans", sans-serif;
  ${({ $styles }) => $styles};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0.1rem solid #3c71ff;
  border-radius: 2rem;
  background-color: #3c71ff;
  outline-color: #3c71ff;
  cursor: pointer;
  transition: 0.3s;
  color: #fff;
  font-size: 1.3rem;
  &:hover {
    background-color: #fff;
    color: #3c71ff;
  }
`;
