import { ButtonStyle } from "./style";

export type props = {
    children:string,
    width?:number,
    height?:number,
    radius?:number
}

const Button = ({children, width, height, radius}:props) => {
    return ( 
        <ButtonStyle width={width} height={height} radius={radius}>{children}</ButtonStyle>
     );
}
 
export default Button;