import { ReactNode } from "react";
import { TitleStyle } from "./style";

export type props = {
    children: ReactNode,
    size?:number,
    light?:boolean
}

const Title = ({children, size, light}:props) => {
    return ( 
        <TitleStyle size={size} light={light}>{children}</TitleStyle>
     );
}
 
export default Title;