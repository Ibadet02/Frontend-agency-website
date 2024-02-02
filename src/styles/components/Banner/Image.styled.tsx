import styled, { RuleSet } from "styled-components";

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
    /* position: relative; */
  }
  figcaption {
    /* position: absolute; */
    bottom: 0;
  }
`;
