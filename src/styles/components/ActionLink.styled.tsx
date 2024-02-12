import { Link } from "react-router-dom";
import styled, { RuleSet } from "styled-components";

export const StyledActionLink = styled(Link)<{ $styles?: RuleSet<object> }>`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  background-color: #3c71ff;
  color: #e0e8ff;
  text-decoration: none;
  padding: 0.6rem 1rem;
  border-radius: 1.25rem;
  border: 0.01rem solid #3c71ff;
  transition: all 0.1s ease-in-out;
  width: fit-content;
  &:hover {
    background-color: #fff;
    color: #3c71ff;
  }
  ${({ $styles }) => $styles};
`;
