import { ReactNode } from "react";
import { TitleStyle } from "./style";

export type props = {
    children: ReactNode,
    size?:string
}

const Title = ({children}:props) => {
    return ( 
        <TitleStyle>{children}</TitleStyle>
     );
}
 
export default Title;