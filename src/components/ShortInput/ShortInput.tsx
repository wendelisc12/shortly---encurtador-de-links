import { useState } from "react";
import Button from "../Button/Button";
import { Container, ErrorText, FloatContainer, Input, InputContainer } from "./style";

const ShortInput = () => {

    const[erro, setErro] = useState('')
    const[link, setLink] = useState('')

    const handleLink = () => {
        if(link.length > 0){
            try{
                const url = new URL(link)
                console.log('url valida' + url.href)
            }catch{
                setErro('invalido')
            }
        }else{
            setErro('vazio')
        }
    }

    return ( 
        <>
            <Container>
                <FloatContainer>
                    <InputContainer>
                        <Input type="text" placeholder="Shorten a link here" erro={erro} onFocus={()=>{setErro('')}} onChange={e => setLink(e.target.value)}/>
                        <ErrorText>{erro === 'invalido' ? 'Please add a valid link' : erro === 'vazio' ? 'please add a link' : ''}</ErrorText>
                    </InputContainer>
                    <Button radius={10} width={170} height={50} onClick={handleLink}>Shorten It!</Button>
                </FloatContainer>
            </Container>
        </>
    );
}
 
export default ShortInput;