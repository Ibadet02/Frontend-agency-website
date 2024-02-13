import styled from "styled-components";

export const StyledTextInputLabel = styled.label`
  position: relative;
  display: inline-flex;
  width: 100%;
  transition-property: border-color;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  &.filled {
    span {
      display: none;
    }
  }
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
    padding-bottom: 0.9rem;
    border-color: #7c8698;
    border-bottom: 0.01rem solid #44526c;
    color: #dfe1e6;
    &:active + span,
    &:focus + span {
      visibility: hidden;
      opacity: 0;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:focus {
      transition: background-color 0s 600000s, color 0s 600000s !important;
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
  }
`;
