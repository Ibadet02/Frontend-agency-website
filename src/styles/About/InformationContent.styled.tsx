import styled from "styled-components";


export const StyledInformationContent = styled.div`
    width: 73rem;
    gap: 2rem;
    display: flex;
    align-items: center;
    @media screen and (max-width: 730px) {
        flex-direction: column;
    }
    .info-frame {
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        text-align: center;
        .aboutUs-image {
            width: 18rem;
            height: 18rem;
            border-radius: 50%;
            object-fit: cover;
        }
    }
`