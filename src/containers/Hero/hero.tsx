import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import { Container, Main } from "./style";

const Hero = () => {
    return ( 
        <Main>
            <Container align="left">
                <Title>More than just <br /> shorter links</Title>
                <Text>Build your brand's recognitiob and get detailed insights on how your links are performing.</Text>
                <Button width={160}>Get started</Button>
            </Container>
            <Container align="right">
                <img src="./illustration-working.svg" alt="" width={500}/>
            </Container>
        </Main>
     );
}
 
export default Hero;