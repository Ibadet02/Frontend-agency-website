import styled, { RuleSet } from "styled-components";

export const StyledImageDemonstrator = styled.div<{
  $styles?: RuleSet<object>;
}>`
  ${({ $styles }) => $styles};
  /* display: flex; */
  /* justify-content: center; */
  /* gap: 1rem; */
  /* height: 100%; */
  @media screen and (max-width: 400px){
    display: grid;
    grid-template-columns: 1fr;
    align-self: center;
    figure {
      margin: 0;
    }
  }
`;
