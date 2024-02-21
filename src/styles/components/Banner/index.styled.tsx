import styled, { RuleSet } from "styled-components";
import { Theme } from "../../../theme";

export const StyledBanner = styled.div<{
  $styles?: RuleSet<object>;
  $flexDirection: string;
  theme: Theme;
}>`
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  text-align: ${({ $flexDirection})=>$flexDirection === "column" && "center"};
  ${({ $styles }) => $styles};
  ${({ theme }) => theme.contentStyles};
`;
