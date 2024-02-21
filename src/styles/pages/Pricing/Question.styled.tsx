import styled from "styled-components";
import { Theme } from "../../../theme";

export const StyledQuestion = styled.h3<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors().contentHeading()};
  cursor: pointer;
  font-size: 1.5rem;
  transition: color, padding ${({ theme }) => theme.transitions.changeMode};
  &.active {
    padding-bottom: 0.5rem;
  }
`;
