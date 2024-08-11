import styled from "styled-components";
import { props } from "./Title";

export const TitleStyle = styled.p<props>`
    font-weight: bold;
    color: ${props => props.light ? '#fff' : 'hsl(255, 11%, 22%)'};
    font-size: ${(prop)=> prop.size ? prop.size + 'em' : '3.5em'};
    line-height: 70px;
`