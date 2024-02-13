import styled, { RuleSet, keyframes } from "styled-components";

const fly = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1rem);
  }
  100% {
    transform: translateY(0);
  }
`;

export const StyledImage = styled.figure<{
  $isCircle: boolean;
  $styles?: RuleSet<object>;
}>`
  ${({ $styles }) => $styles};
  width: 15rem;
  .image {
    aspect-ratio: ${(props) => (props.$isCircle ? "1/1" : "4/5.5")};
    width: 100%;
    border-radius: ${(props) => (props.$isCircle ? "50%" : "40%")};
    animation: ${fly} 3s ease-in-out infinite alternate;
    /* position: relative; */
  }
  figcaption {
    /* position: absolute; */
    bottom: 0;
  }
`;
