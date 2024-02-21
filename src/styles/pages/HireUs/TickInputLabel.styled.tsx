import styled from "styled-components";
import { Theme } from "../../../theme";

export const StyledTickInputLabel = styled.label<{ theme: Theme }>`
  position: relative;
  display: inline-flex;
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  input:checked + span {
    color: #fff;

    &::before {
      background-color: ${({ theme }) => theme.colors().mainBlue};
    }
  }
  span {
    color: ${({ theme }) => theme.colors().mainBlue};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: -moz-max-content;
    width: max-content;
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
    padding: 0.5rem 1rem;
    z-index: 1;
    transition-property: color;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    &:hover {
      &::before {
        background: rgba(78, 90, 107, 0.5);
      }
    }
    &::before {
      content: "";
      background: #1f2934;
      transition-property: background;
      transition-duration: 0.2s;
      transition-timing-function: ease;
      border-radius: 100px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
`;
