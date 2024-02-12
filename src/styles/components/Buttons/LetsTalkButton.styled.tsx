import { Link } from "react-router-dom";
import styled, { RuleSet } from "styled-components";

export const StyledLetsTalkButton = styled(Link)<{ $styles?: RuleSet<object> }>`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 2.7rem;
  width: fit-content;
  padding: 0 2rem;
  border-radius: 1.5rem;
  background: #3d3a4e;
  background-size: 400%;
  color: #fff;
  text-decoration: none;
  ${({ $styles }) => $styles};
  &:hover::before {
    transform: scaleX(1);
  }
  .button-content {
    position: relative;
    z-index: 1;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      82.3deg,
      rgba(150, 93, 233, 1) 10.8%,
      rgba(99, 88, 238, 1) 94.3%
    );
    transition: all 0.475s;
  }
`;
