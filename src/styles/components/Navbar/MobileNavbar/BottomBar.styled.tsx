import styled from "styled-components";
import { Theme } from "../../../../theme";

export const StyledBottomBar = styled.div<{ theme: Theme }>`
  position: absolute;
  left: 0;
  bottom: calc(-100vh + ${({ theme }) => theme.heights.navbar});
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.heights.navbar});
  background-color: ${({ theme }) => theme.colors().mainBG};
  z-index: 100;
  overflow-y: auto;
  display: none;
  opacity: 0;
  transition: opacity 200ms;
  .nav-links {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      flex: 1;
      padding-block: 1.2rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: ${({ theme }) => theme.colors().mainLink()};
      transition: color ${({ theme }) => theme.transitions.changeMode};
      font-size: 1.5rem;
      font-weight: 550;
      &:hover {
        color: ${({ theme }) => theme.colors().mainLinkHover()};
      }
      &.active {
        color: #3c71fd;
      }
    }
  }
  &.bottom-bar-enter-active {
    opacity: 0;
    display: block;
  }
  &.bottom-bar-enter-done {
    opacity: 1;
    display: block;
  }
  &.bottom-bar-exit {
    opacity: 1;
    display: block;
  }
  &.bottom-bar-exit-active {
    opacity: 0;
    display: block;
  }
  &.bottom-bar-exit-done {
    opacity: 0;
    display: none;
  }
`;
