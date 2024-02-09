import styled from "styled-components";
import { Theme } from "../../../../theme";

export const StyledTopBar = styled.div<{ theme: Theme }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .top-bar__left {
  }
  .top-bar__right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    .menu-bars {
      cursor: pointer;
      &.active {
        .bar-1 {
          transform: rotate(45deg) translate(0.2rem, 0.2rem);
        }
        .bar-2 {
          opacity: 0;
        }
        .bar-3 {
          transform: rotate(-45deg) translate(0.2rem, -0.2rem);
        }
      }
      .menu-bar {
        background-color: ${({ theme }) => theme.colors().menuBarBG()};
        transition: ${({ theme }) => theme.transitions.changeMode};
        width: 1rem;
        height: 0.12rem;
        margin: 0.2rem;
        border-radius: 0.1rem;
      }
      .bar-2 {
        height: 0.1rem;
      }
    }
  }
`;
