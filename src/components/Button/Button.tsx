import { ReactNode } from "react";
import { ButtonStyle } from "./style";

export type props = {
    children: ReactNode,
    width?:number,
    height?:number,
    responsiveWidth?:number,
    responsiveHeight?:number,
    responsiveFontSize?:number,
    responsiveWidthPercent?:boolean,
    radius?:number,
    onClick?: () => void
}

const Button = ({children, width, height, responsiveWidth, responsiveHeight, responsiveFontSize,responsiveWidthPercent, radius, onClick}:props) => {
    return ( 
        <ButtonStyle width={width} height={height} responsiveWidthPercent={responsiveWidthPercent} responsiveFontSize={responsiveFontSize} responsiveWidth={responsiveWidth} responsiveHeight={responsiveHeight} radius={radius} onClick={onClick}>{children}</ButtonStyle>
     );
}
 
export default Button;