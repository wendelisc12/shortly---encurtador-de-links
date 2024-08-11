import { Link } from "./style";

export type props ={
    children:string,
    light?:boolean
}

const TextLink = ({children, light}:props) => {
    return ( 
        <Link href="#" light={light}>{children}</Link>
     );
}
 
export default TextLink;