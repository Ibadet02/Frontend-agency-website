import styled from "styled-components";
import { Theme } from "../../../theme";

export const StyledConstruction = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  gap: 2rem;
  ${({ theme }) => theme.contentStyles};
  .construction-svg-wrapper {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    svg {
      width: 100%;
      fill: ${({ theme }) => theme.colors().siteThemeContrast()};
      transition: ${({ theme }) => theme.transitions.changeMode};
    }
  }
  .info {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    form {
      width: 100%;
    }
  }
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    .construction-svg-wrapper {
      flex: none;
    }
    .info- {
      flex-basis: 100%;
      width: 100%;
    }
  } 
`;
