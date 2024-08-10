import styled from "styled-components";
import { props } from "./Button";

export const ButtonStyle = styled.button<props>`
    background-color: hsl(180, 66%, 49%);
    height: ${(props) => props.height ? props.height + 'px' : '45px'};
    width: ${(props) => props.width ? props.width + 'px' : '110px'};
    color: white;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    border-radius: ${(props) => props.radius ? props.radius + 'px' : '40px'};
    font-size: 15px;
    transition: all 300ms;

    &:hover{
        filter: brightness(0.9);
    }
`