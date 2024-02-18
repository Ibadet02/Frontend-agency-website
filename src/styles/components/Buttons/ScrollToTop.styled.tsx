import styled from "styled-components";
import { Theme } from "../../../theme";

export const StyledScrollToTop = styled.div<{ theme: Theme }>`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
  transition: background-color 0.3s;
  button {
    background: none;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors().mainBlue};
    cursor: pointer;
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: .3rem;
  }
`;
