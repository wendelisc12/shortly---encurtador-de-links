import { useState } from 'react';
import {ButtonCopy, ContainerShortered, LinkShorted} from './style'

type props ={
    linkOriginal:string,
    linkShort:string
}

const ShorteredLink = ({linkOriginal, linkShort}:props) => {
    const[clicked, setClicked] = useState(false)

    const copyLink = () => {
        navigator.clipboard.writeText(linkShort)
        .then(()=>{
            setClicked(true)
            setInterval(()=>setClicked(false), 2000)
        }).catch(err => alert(err))
    }

    return ( 
        <ContainerShortered>
            <p>{linkOriginal}</p>
            <div>
                <LinkShorted href={linkShort}>{linkShort}</LinkShorted>
                <ButtonCopy radius={10} clicked={clicked} onClick={copyLink}> </ButtonCopy>
            </div>
        </ContainerShortered>
     );
}
 
export default ShorteredLink;