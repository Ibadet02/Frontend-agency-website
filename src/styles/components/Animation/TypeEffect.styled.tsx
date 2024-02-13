import styled, { keyframes } from "styled-components";
import { Theme } from "../../../theme";
const typing = keyframes`
    from { max-width: 0 }
    to { max-width: 100% }
`;

const blinkCaret = keyframes<{ theme: Theme }>`
    from, to { border-color: transparent }
    50% { border-color: orange }
`;

export const StyledTypeEffect = styled.div`
  & > * {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    /* margin: 0 auto; Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    width: fit-content;
    animation: ${typing} 4s steps(40, end),
      ${blinkCaret} 0.75s step-end infinite;
  }
`;
