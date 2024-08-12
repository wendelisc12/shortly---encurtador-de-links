import styled from "styled-components";
import { props } from "./Text";

export const TextStyle = styled.p<props>`
    color: hsl(257, 7%, 63%);

    @media (max-width: 767px){
        font-size: ${props => props.responsiveSize + 'px'};
    }
    
`