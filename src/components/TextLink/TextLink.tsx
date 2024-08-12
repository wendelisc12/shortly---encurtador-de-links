import { Link } from "./style";

export type props ={
    children:string,
    light?:boolean,
    responsiveSize?:number,
    responsiveLight?:boolean
}

const TextLink = ({children, light, responsiveSize,responsiveLight}:props) => {
    return ( 
        <Link href="#" light={light} responsiveSize={responsiveSize} responsiveLight={responsiveLight}>{children}</Link>
     );
}
 
export default TextLink;