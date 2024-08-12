import { useState } from "react";
import Button from "../Button/Button";
import { Container, ErrorText, FloatContainer, Input, InputContainer } from "./style";
import { useDispatch } from "react-redux";
import { adicionarLinks } from "../../store/reducers/Link";
import { useShortenUrlMutation } from "../../service/api";
import { PulseLoader } from "react-spinners";


const ShortInput = () => {

    const dispatch = useDispatch()

    const [shortenUrl, {isLoading}] = useShortenUrlMutation()
                

    const[erro, setErro] = useState('')
    const[link, setLink] = useState('')

    const handleLink = async () => {
        if(link.length > 0){
            try{
                const url = new URL(link)
                const response = await shortenUrl(url.toString())
                const tinyUrl = response.data?.data.tiny_url
                
                if(tinyUrl){
                    dispatch(adicionarLinks({linkOrigin: url.toString(), linkEncurtado: tinyUrl.toString()})) 
                    setLink('')
                }else{
                    alert("ocorreu um erro ao encurtar o link")
                }
                
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
                        <Input type="text" placeholder="Shorten a link here" erro={erro} value={link} onFocus={()=>{setErro('')}} onChange={e => setLink(e.target.value)}/>
                        <ErrorText>{erro === 'invalido' ? 'Please add a valid link' : erro === 'vazio' ? 'please add a link' : ''}</ErrorText>
                    </InputContainer>
                    <Button radius={10} responsiveFontSize={18} width={170} responsiveWidth={330} height={50} onClick={handleLink}>{isLoading ? <PulseLoader color="#fff" size={10}/> : 'Shorten it!'}</Button>
                </FloatContainer>
            </Container>
        </>
    );
}
 
export default ShortInput;