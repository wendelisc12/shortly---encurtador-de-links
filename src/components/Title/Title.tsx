import { ReactNode } from "react";
import { TitleStyle } from "./style";

export type props = {
    children: ReactNode,
    size?:number
}

const Title = ({children, size}:props) => {
    return ( 
        <TitleStyle size={size}>{children}</TitleStyle>
     );
}
 
export default Title;