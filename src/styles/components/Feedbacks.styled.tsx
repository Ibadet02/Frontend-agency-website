import styled, { RuleSet } from "styled-components";
import { Theme } from "../../theme";

export const StyledFeedbacks = styled.div<{
  $styles?: RuleSet<object>;
  theme: Theme;
}>`
  ${({ theme }) => theme.contentStyles};
  display: flex;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: flex-start;
  }
  ${({ $styles }) => $styles};
`;
