import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledNewsLetterInput = styled.label<{ theme: Theme }>`
  display: block;
  position: relative;
  width: 100%;
  height: 3.5rem;
  input {
    transition: ${({ theme }) => theme.transitions.changeMode};
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    border: ${({ theme }) => ".1rem solid " + theme.colors().mainBorder()};
    outline: none;
    padding-inline: 1rem 10rem;
  }
  .button-wrapper {
    width: 10rem;
    height: 100%;
    padding: 0.4rem;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
