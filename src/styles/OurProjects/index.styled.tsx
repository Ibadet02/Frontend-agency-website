import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledOurProjects = styled.article<{theme: Theme}>`
    padding-top: calc(${({ theme }) => theme.heights.navbar} + 3rem);
`