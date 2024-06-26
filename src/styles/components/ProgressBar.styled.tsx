import styled, { keyframes } from "styled-components";

const indeterminate = keyframes`
  0% {
      left: -35%;
      right: 100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }
`;
const indeterminate_short = keyframes`
    0% {
      left: -200%;
      right: 100%;
    }
    60% {
      left: 107%;
      right: -8%;
    }
    100% {
      left: 107%;
      right: -8%;
    }
`;

export const StyledProgressBar = styled.div`
  position: relative;
  height: 2px;
  display: block;
  z-index: 9999;
  width: 100%;
  background-color: white;
  border-radius: 2px;
  background-clip: padding-box; /*margin: 0.5rem 0 1rem 0;*/
  overflow: hidden;
  .indeterminate {
    background-color: black;
    &::before {
      content: "";
      position: absolute;
      background-color: #2c67b1;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: ${indeterminate} 2.1s
        cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      animation: ${indeterminate} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)
        infinite;
    }
    &::after {
      content: "";
      position: absolute;
      background-color: #2c67b1;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: ${indeterminate_short} 2.1s
        cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
      animation: ${indeterminate_short} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)
        infinite;
      -webkit-animation-delay: 1.15s;
      animation-delay: 1.15s;
    }
  }
`;
