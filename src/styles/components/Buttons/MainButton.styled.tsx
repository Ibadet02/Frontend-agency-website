import styled, { RuleSet, keyframes } from "styled-components";

const fly = keyframes`
  from {
    transform: translateY(0.1em);
  }
  to {
    transform: translateY(-0.1em);
  }
`;
export const StyledMainButton = styled.button<{
  $styles?: RuleSet<object>;
  $textFadesOut?: string;
}>`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
  font-family: "Josefin Sans", sans-serif;
  ${({ $styles }) => $styles};
  font-size: 1.25em;
  background: royalblue;
  color: white;
  padding: 0.7em 0.9em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 1em;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    .svg-wrapper {
      animation: ${fly} 0.6s ease-in-out infinite alternate;
    }
    svg {
      transform: translateX(2.1em) rotate(45deg) scale(1.1);
    }
    span {
      transform: translateX(${({ $textFadesOut }) => $textFadesOut || "5em"});
    }
  }
  &:active {
    transform: scale(0.95);
  }
  span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }
  svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }
`;
