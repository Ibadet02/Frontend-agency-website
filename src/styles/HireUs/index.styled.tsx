import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledHireUs = styled.article<{theme: Theme}>`
  width: 100%;
  margin-bottom: 5rem;
  padding-top: calc(${({ theme }) => theme.heights.navbar} + 3rem);
`;
