import { createGlobalStyle } from "styled-components";
import { Theme } from "../theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    :root {
        @media screen and (max-width: 400px) {
            font-size: 14px;
        }
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        /* font-family: 'Poppins', sans-serif; */
        scroll-behavior: smooth;
    }
    body {
        padding-top: calc(${({ theme }) => theme.heights.navbar} + 1rem);
        background-color: ${({ theme }) => theme.colors().mainBG()};
        transition: background-color ${({ theme }) => theme.transitions.changeMode};
        overflow: ${({ theme})=> theme.bodyOverflow};
    }
`;
