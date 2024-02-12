import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledFAQContent = styled.div<{theme: Theme}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-height: 30rem;
  overflow-y: auto;
  padding-block: 1rem;
  ${({ theme }) => theme.contentStyles};
`;
