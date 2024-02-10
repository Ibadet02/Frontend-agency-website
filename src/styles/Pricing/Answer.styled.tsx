import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledAnswer = styled.p<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors().answer()};
  font-size: 0.95rem;
  max-height: 0;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.changeMode};
  display: flex;
  flex-direction: column;
`;
