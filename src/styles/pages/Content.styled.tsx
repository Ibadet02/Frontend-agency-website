import styled from "styled-components";
import { Theme } from "../../theme";


export const StyledContent = styled.div<{theme: Theme}>`
    ${({theme})=> theme.contentStyles};
`