import styled from "styled-components";
import { Theme } from "../../../theme";

export const StyledHireUsFormContent = styled.div<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors().hireUsFormBG()};
  border: ${({ theme }) => ".1rem solid " + theme.colors().mainBorder()};
  transition: ${({ theme }) => theme.transitions.changeMode};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-inline: 1rem;
  padding-block: 3rem;
  ${({ theme }) => theme.contentStyles};
`;
