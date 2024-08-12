import { ReactNode } from "react";
import { TitleStyle } from "./style";

export type props = {
    children: ReactNode,
    size?:number,
    responsiveSize?:number,
    light?:boolean
}

const Title = ({children, size, light, responsiveSize}:props) => {
    return ( 
        <TitleStyle size={size} light={light} responsiveSize={responsiveSize}>{children}</TitleStyle>
     );
}
 
export default Title;