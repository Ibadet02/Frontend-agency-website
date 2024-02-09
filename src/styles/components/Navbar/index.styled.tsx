import styled from "styled-components";
import { Theme } from "../../../theme";

export const StyledNavbar = styled.nav<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors().mainBG};
  height: ${({ theme }) => theme.heights.navbar};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transition: ${({ theme }) => theme.transitions.changeMode};
  &.visible {
    top: 0;
  }
  &.hidden {
    top: -4.5rem;
  }
`;
