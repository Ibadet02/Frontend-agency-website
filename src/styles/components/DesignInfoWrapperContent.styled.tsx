import styled, { RuleSet } from "styled-components";

export const StyledDesignInfoWrapperContent = styled.div<{
  $styles?: RuleSet<object>;
}>`
  width: 75rem;
  padding-inline: 1rem;
  @media screen and (max-width: 820px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${({ $styles }) => $styles};
`;
