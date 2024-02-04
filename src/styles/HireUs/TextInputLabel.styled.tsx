import styled from "styled-components";

export const StyledTextInputLabel = styled.label`
  position: relative;
  display: inline-flex;
  width: 100%;
  transition-property: border-color;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  input {
    width: 100%;
    position: relative;
    border: none;
    outline: none;
    border-radius: 0;
    background-color: transparent;
    color: #dfe1e6;
    transition-property: border-color;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    font-size: 1.6rem;
    font-weight: 400;
    padding-bottom: .9rem;
    border-color: #7c8698;
    border-bottom: .01rem solid #44526c;
    color: #dfe1e6;
    &:active + span,
    &:focus + span
    /* &:not([value=""]) + span */ {
      visibility: hidden;
      opacity: 0;
    }
  }
  span {
    visibility: visible;
    opacity: 1;
    color: #7c8698;
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    font-size: 1.4rem;
    font-weight: 400;
    padding-bottom: 0.9rem;
    /* Hide the span when input is focused */
    /* &:focus ~ & {
      visibility: hidden;
      opacity: 0;
    } */

    /* Show the span again when input is blurred, unless input has content */
    /* &:not(:focus) {
      visibility: visible;
      opacity: 1;
    } */

    /* Exception: Keep span hidden if input has content when blurred */
    /* &:not(:focus):not([value=""]) {
      visibility: hidden;
      opacity: 0;
    } */
  }
`;
