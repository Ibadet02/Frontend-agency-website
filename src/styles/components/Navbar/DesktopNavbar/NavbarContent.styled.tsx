import styled from "styled-components";
import { Theme } from "../../../../theme";

export const StyledNavbarContent = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75rem;
  padding-inline: 1rem;
  height: 100%;
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors().mainLink()};
      transition: color ${({ theme }) => theme.transitions.changeMode};
      &:hover {
        color: ${({ theme }) => theme.colors().mainLinkHover()};
      }
      &.active {
        color: #3c71fd;
      }
    }
  }
`;
