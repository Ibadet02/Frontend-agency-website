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
        ::-webkit-scrollbar {
            width: .6rem;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 1rem;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors().mainBlue};
            border-radius: 1rem;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #2552cf;
        }
        ::-webkit-scrollbar-thumb:active {
            background: #1a47c6;
        }
        scroll-behavior: smooth;
    }
    body {
        /* padding-top: calc(${({ theme }) => theme.heights.navbar} + 3rem); */
        background-color: ${({ theme }) => theme.colors().mainBG()};
        transition: background-color ${({ theme }) =>
          theme.transitions.changeMode};
        overflow: ${({ theme }) => theme.bodyOverflow};
        /* height: 100vh; */
        .container{
            
        }
    }
`;
