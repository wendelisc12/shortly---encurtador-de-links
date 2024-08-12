import styled from "styled-components";

export const BoostContainer = styled.div`  
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 40px 0;
    background: url('./bg-boost-desktop.svg') center no-repeat hsl(257, 27%, 26%);
    background-size: cover;

    @media (max-width: 767px){
        background: url('./bg-boost-mobile.svg') right no-repeat hsl(257, 27%, 26%);
        gap: 15px;
    }
`