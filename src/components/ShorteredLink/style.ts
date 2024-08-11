import styled from "styled-components";
import { ButtonStyle } from "../Button/style";

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
`

export const LinkShorted = styled.a`
    color: hsl(180, 66%, 49%);
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`

export const ButtonCopy = styled(ButtonStyle)<propsButton>`
    margin-left: 30px;
    background-color: ${props => props.clicked ? 'hsl(255, 11%, 22%)' : 'hsl(180, 66%, 49%)'};

    &::before{
        content: "${props => props.clicked ? 'Copied!' : 'Copy'}";
    }
`