import styled from "styled-components";
import { Theme } from "../../../../theme";

export const StyledNavbarContent = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  ${({ theme }) => theme.contentStyles};
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    a {
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 400;
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
