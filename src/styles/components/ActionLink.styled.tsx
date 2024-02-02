import { Link } from "react-router-dom";
import styled, { RuleSet } from "styled-components";

export const StyledActionLink = styled(Link)<{ $styles?: RuleSet<object> }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .35rem;
  background-color: #3C71FF;
  color: #E0E8FF;
  text-decoration: none;
  padding: .6rem 1rem;
  border-radius: 1.25rem;
  border: .01rem solid #3C71FF;
  transition: all .1s ease-in-out;
  width: fit-content;
  &:hover{
    background-color: #fff;
    color: #3C71FF;
  }
  ${({ $styles }) => $styles};
`;
