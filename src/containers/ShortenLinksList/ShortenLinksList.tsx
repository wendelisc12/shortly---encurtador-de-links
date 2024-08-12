import { useSelector } from "react-redux";
import ShorteredLink from "../../components/ShorteredLink/ShorteredLink";
import { RootReducer } from "../../store/store";

const ShortenLinksList = () => {
    const dados = useSelector((state:RootReducer) => state.Link)
    
    return ( 
        <div>
            {
                dados.map((links)=>(
                    <ShorteredLink linkShort={links.linkEncurtado} linkOriginal={links.linkOrigin}/>
                ))
            }
        </div>
     );
}
 
export default ShortenLinksList;