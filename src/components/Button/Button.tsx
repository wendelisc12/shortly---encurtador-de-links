import { ReactNode } from "react";
import { ButtonStyle } from "./style";

export type props = {
    children: ReactNode,
    width?:number,
    height?:number,
    radius?:number,
    onClick?: () => void
}

const Button = ({children, width, height, radius, onClick}:props) => {
    return ( 
        <ButtonStyle width={width} height={height} radius={radius} onClick={onClick}>{children}</ButtonStyle>
     );
}
 
export default Button;