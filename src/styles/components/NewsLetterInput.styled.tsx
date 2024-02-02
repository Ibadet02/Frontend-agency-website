import styled from "styled-components";

export const StyledNewsLetterInput = styled.label`
    display: block;
    position: relative;
    width: 100%;
    height: 3.5rem;
    input{
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        border: none;
        outline: none;
        padding-inline: 1rem 10rem;
    }
    .button-wrapper{
        width: 10rem;
        height: 100%;
        padding: .4rem;
        position: absolute;
        top: 0;
        right: 0;
    }
`