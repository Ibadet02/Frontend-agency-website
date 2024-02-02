import styled, { RuleSet } from "styled-components";

export const StyledFeedbackGroup = styled.div<{$styles?: RuleSet<object>}>`
    ${({ $styles }) => $styles};
    display: flex;
    flex: 1;
    gap: 1rem;
`