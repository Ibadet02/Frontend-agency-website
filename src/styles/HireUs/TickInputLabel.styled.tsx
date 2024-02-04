import styled from "styled-components";

// interface StyledTickInputProps {
//   type: "checkbox" | "radio";
// }

export const StyledTickInputLabel = styled.label`
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
      background: #3C71FF;
    }
  }
  span {
    color: #3C71FF;
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
    /* line-height: 20px; */
    font-weight: 500;
    /* line-height: 40px; */
    text-align: center;
    padding: .5rem 1rem;
    z-index: 1;
    transition-property: color;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    &::before {
      content: "";
      background: rgba(78, 90, 107, 0.5);
      background: #1F2934;
      transition-property: background;
      transition-duration: 0.4s;
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
