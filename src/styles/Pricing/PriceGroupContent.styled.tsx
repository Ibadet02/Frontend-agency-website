import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledPriceGroupContent = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  ${({ theme }) => theme.contentStyles};
`;
