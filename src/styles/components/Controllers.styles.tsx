import styled, { RuleSet } from "styled-components";

export const StyledControllers = styled.div<{$styles?: RuleSet<object>}>`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: .4rem;
    ${({ $styles }) => $styles};
    #previous, #next {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: #3C71FF;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all .2s ease;
        &:active {
            transform: scale(.9);
        }
    }
`