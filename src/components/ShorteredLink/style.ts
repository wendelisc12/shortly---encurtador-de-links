import styled from "styled-components";
import { ButtonStyle } from "../Button/style";
import { HorizontalLine } from "../../containers/Navbar/style";

type propsButton={
    clicked:boolean
}

export const ContainerShortered = styled.div`
    background-color: white;
    margin-top: 20px;
    padding: 15px 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px){
        padding: 10px 0 ;
        flex-direction: column;
    }
`

export const OriginalLink = styled.p`
    @media (max-width: 767px){
        padding: 15px;
    }
`

export const LinkShorted = styled.a`
    color: hsl(180, 66%, 49%);
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`

export const ContainerCopyLink = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 767px){
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        gap: 10px;
        padding: 15px;
    }
`

export const ButtonCopy = styled(ButtonStyle)<propsButton>`
    margin-left: 30px;
    background-color: ${props => props.clicked ? 'hsl(255, 11%, 22%)' : 'hsl(180, 66%, 49%)'};

    &::before{
        content: "${props => props.clicked ? 'Copied!' : 'Copy'}";
    }
    @media (max-width: 767px){
        margin: 0;
    }
`
export const Horizontaline = styled(HorizontalLine)`
    width: 100%;
`