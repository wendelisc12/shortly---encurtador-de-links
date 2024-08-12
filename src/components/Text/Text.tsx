import { TextStyle } from "./style";

export type props = {
    children:string,
    responsiveSize?:number
}

const Text = ({children, responsiveSize}:props) => {
    return ( 
        <TextStyle responsiveSize={responsiveSize}>{children}</TextStyle>
     );
}
 
export default Text;