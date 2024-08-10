import { Link } from "./style";

type props ={
    children:string
}

const TextLink = ({children}:props) => {
    return ( 
        <Link href="#">{children}</Link>
     );
}
 
export default TextLink;