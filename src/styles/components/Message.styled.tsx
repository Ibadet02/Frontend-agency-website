import styled, { keyframes } from "styled-components";
import { Theme } from "../../theme";
const fadeOut = keyframes`
    0% {
        opacity: 1;
        top: -4rem;
    }
    100% {
        opacity: 0;
        top: 4rem;
    }
`;
export const StyledMessage = styled.div<{ theme: Theme }>`
  background-color: yellow;
  position: fixed;
  top: -2rem;
  right: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  overflow: visible;
  transition: 200ms ease-in-out;
  height: 2rem;
  opacity: 0;
  &.visible {
    animation: ${fadeOut} 1000ms ease-in-out alternate forwards;
  }
  &.hidden {
    opacity: 0;
  }
  p {
    background-color: red;
    /* display: flex; */
    height: 100%;
  }
`;
