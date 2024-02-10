import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledAccordion = styled.div<{theme: Theme}>`
  width: 100%;
  border: .1rem solid ${({ theme }) => theme.colors().creamGray};
  border-radius: .4rem;
  padding: 1rem;
`;
