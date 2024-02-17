import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledHome = styled.article<{ theme: Theme }>`
  /* height: 100vh; */
  padding-top: calc(${({ theme }) => theme.heights.navbar} + 3rem);
`;
