import styled from "styled-components";
import { Theme } from "../../theme";


export const StyledAbout = styled.article<{theme: Theme}>`
    margin-bottom: 5rem;
    padding-top: calc(${({ theme }) => theme.heights.navbar} + 3rem);
`