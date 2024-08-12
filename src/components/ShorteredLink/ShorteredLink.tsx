import { useState } from 'react';
import {ButtonCopy, ContainerShortered, LinkShorted, ContainerCopyLink, Horizontaline, OriginalLink} from './style'

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
            <OriginalLink>{linkOriginal}</OriginalLink>
            <Horizontaline></Horizontaline>
            <ContainerCopyLink>
                <LinkShorted href={linkShort}>{linkShort}</LinkShorted>
                <ButtonCopy responsiveWidthPercent radius={10} clicked={clicked} onClick={copyLink}> </ButtonCopy>
            </ContainerCopyLink>
        </ContainerShortered>
     );
}
 
export default ShorteredLink;