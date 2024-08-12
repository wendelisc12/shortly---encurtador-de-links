import styled from "styled-components";

export const FooterStyle = styled.div`
    padding: 50px 0;
    display: grid;
    grid-template-columns: 1.5fr 2fr 1fr;

    @media (max-width: 767px){
        gap:30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const LogoImg = styled.img`
    filter: brightness(6);
`

export const LinksContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 767px){
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

`

export const SocialContainer = styled.div`
    display: flex;
    gap: 30px;
`

export const ColumLink = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 767px){
        margin-bottom: 30px;
    }
`