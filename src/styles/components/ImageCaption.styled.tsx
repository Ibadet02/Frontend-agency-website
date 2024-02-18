import styled, { RuleSet } from "styled-components";
import { Theme } from "../../theme";

export const StyledImageCaption = styled.figcaption<{
  $styles?: RuleSet<object>;
  theme: Theme;
}>`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  .caption-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: .1rem solid ${({ theme }) => theme.isDarkMode ? 'transparent' : 'rgba(0, 0, 0, 0.2)'};
  }
  ${({ $styles }) => $styles};
`;
