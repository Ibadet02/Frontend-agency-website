import styled from "styled-components";

export const StyledNavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75rem;
  padding-inline: 1rem;
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 820px) {
      display: none;
    }
    a{
        text-decoration: none;
        color: #CFD1D0;
        &.active{
            color: #3C71FD;
        }
    }
  }
`;
