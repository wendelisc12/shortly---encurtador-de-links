import styled from "styled-components";
import { props } from "./TextLink";

export const Link = styled.a<props>`
    color: ${props => props.light ? '#fff' : 'hsl(257, 7%, 63%)'};
    text-decoration: none;
    font-weight: 600;

    &:hover{
        text-decoration: underline;
    }
`