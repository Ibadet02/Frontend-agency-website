import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledPrice = styled.div<{theme: Theme}>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  min-width: 17rem;
  max-width: 22rem;
  background-color: ${({ theme }) => theme.colors().priceBG()};
  padding: 2rem;
  border-radius: 4rem;
  &.popular {
    background-color: ${({ theme }) => theme.colors().mainBlue};
    a {
      background-color: ${({ theme }) => theme.colors().white};
      color: ${({ theme }) => theme.colors().mainBlue};
    }
  }
  .price-duration--info {
    display: flex;
    align-items: center;
    color: #fff;
  }
`;
