import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledInputFamily = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors().contentHeading()};
  }
`;
