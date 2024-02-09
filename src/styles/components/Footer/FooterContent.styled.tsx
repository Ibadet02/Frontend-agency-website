import styled from "styled-components";
import { Theme } from "../../../theme";

export const StyledFooterContent = styled.div<{ theme: Theme }>`
  width: 75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-inline: 1rem;
  .footer-content__top,
  .footer-content__bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 820px) {
      flex-direction: column;
      gap: 3rem;
    }
  }
  .footer-content__top {
    &--left {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 12rem;
    }
    &--middle {
      display: flex;
      gap: 4rem;
      @media screen and (max-width: 820px) {
        flex-direction: column;
      }
      &--link-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        &--link-grid {
          display: grid;
          gap: 0.5rem;
          &.about {
            grid-template-columns: repeat(2, 1fr);
            a {
              padding-right: 1rem;
            }
          }
          a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors().mainLink()};
            transition: color ${({ theme }) => theme.transitions.changeMode};
            span {
              display: block;
              transition: transform
                ${({ theme }) => theme.transitions.changeMode};
              pointer-events: none;
            }
            &:hover {
              color: ${({ theme }) => theme.colors().mainLinkHover()};
              span {
                transform: translateX(1rem);
              }
            }
          }
        }
      }
    }
    &--right {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      label {
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
        input {
          transition: ${({ theme }) => theme.transitions.changeMode};
          padding: 0.8rem 0.1rem 0.8rem 0.2rem;
          outline: none;
          border: ${({ theme }) =>
            ".1rem solid " + theme.colors().mainBorder()};
          border-radius: 0.4rem;
        }
      }
    }
  }
  .footer-content__bottom {
  }
`;
