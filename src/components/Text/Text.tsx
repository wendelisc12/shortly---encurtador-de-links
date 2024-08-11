import { TextStyle } from "./style";

type props = {
    children:string
}

const Text = ({children}:props) => {
    return ( 
        <TextStyle>{children}</TextStyle>
     );
}
 
export default Text;