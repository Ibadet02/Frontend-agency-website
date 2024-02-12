import styled, { RuleSet } from "styled-components";
import { Theme } from "../../theme";

export const StyledDesignInfoWrapperContent = styled.div<{
  $styles?: RuleSet<object>;
  theme: Theme;
}>`
  ${({ theme }) => theme.contentStyles};
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${({ $styles }) => $styles};
`;
