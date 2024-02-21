import styled, { RuleSet } from "styled-components";
import { Theme } from "../../theme";

export const StyledDesignInfoWrapper = styled.div<{
  $styles?: RuleSet<object>;
  theme: Theme;
  $flexDirection: string;
}>`
  ${({ theme }) => theme.contentStyles};
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${({ $styles }) => $styles};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
`;
