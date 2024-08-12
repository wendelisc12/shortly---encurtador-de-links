import styled from "styled-components";
import { props } from "./TextLink";

export const Link = styled.a<props>`
    color: ${props => props.light ? '#fff' : 'hsl(257, 7%, 63%)'};
    text-decoration: none;
    font-weight: 600;

    &:hover{
        text-decoration: underline;
    }

    @media (max-width: 767px){
        color: ${props => props.responsiveLight || props.light ? '#fff': 'hsl(257, 7%, 63%)'};
        font-size: ${props => props.responsiveSize ? props.responsiveSize + 'px' : '16px'};
    }
`