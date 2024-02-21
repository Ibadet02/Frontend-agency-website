import styled from "styled-components";
import { Theme } from "../../../theme";

export const StyledInformationContent = styled.div<{theme: Theme}>`
  width: 73rem;
  gap: 2rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 730px) {
    flex-direction: column;
  }
  .info-frame {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
    .aboutUs-image {
      width: 18rem;
      height: 18rem;
      border-radius: 50%;
      object-fit: cover;
    }
    .name{
      font-size: 2.2rem;
      font-weight: 700;
      transition: color 300ms ease;
      color: ${({ theme }) => theme.colors().contentHeading()};
      font-family: "Protest Strike",sans-serif;
    }
  }
`;
