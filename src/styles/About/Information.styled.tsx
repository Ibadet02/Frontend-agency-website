import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledInformation = styled.section<{theme: Theme}>`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 2rem;
    padding-inline: 1rem;
    margin-bottom: 5rem;
`