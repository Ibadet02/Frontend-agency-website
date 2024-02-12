import styled, { RuleSet } from "styled-components";
import { Theme } from "../../../theme";

export const StyledBannerContent = styled.div<{
  $styles?: RuleSet<object>;
  theme: Theme;
}>`
  display: flex;
  ${({ $styles }) => $styles};
  ${({ theme }) => theme.contentStyles};
`;
