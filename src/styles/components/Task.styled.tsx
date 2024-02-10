import styled from "styled-components";
import { Theme } from "../../theme";


export const StyledTask = styled.div<{theme: Theme}>`
    display: flex;
    align-items: center;
    gap: 1rem;
    .icon-wrapper {
        background-color: ${({ theme }) => theme.colors().white};
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        svg {
            color: ${({ theme }) => theme.colors().mainBlue};
        }
    }
`