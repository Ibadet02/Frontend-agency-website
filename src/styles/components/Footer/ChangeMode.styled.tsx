import styled from "styled-components";
import { Theme } from "../../../theme";

const circleSize = "1.2rem";
const changeModePadding = ".15rem";
export const StyledChangeMode = styled.button<{ theme: Theme }>`
  width: calc((${circleSize} + ${changeModePadding} * 2) * 1.85);
  height: calc(${circleSize} + ${changeModePadding} * 2);
  cursor: pointer;
  background: none;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors().mainBlue};
  border: none;
  padding: ${changeModePadding};
  &.light {
    .container {
      .circle {
        left: calc(100% - ${circleSize});
      }
    }
  }
  .container {
    width: 100%;
    height: 100%;
    position: relative;
    .circle {
      position: absolute;
      top: 0;
      left: 0;
      transition: 300ms;
      height: 100%;
      width: ${circleSize};
      border-radius: 50%;
      background-color: #fff;
    }
  }
`;
