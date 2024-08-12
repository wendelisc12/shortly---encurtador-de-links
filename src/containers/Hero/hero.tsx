import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import { Container, Illustration, Main } from "./style";

const Hero = () => {
    return ( 
        <Main>
            <Container align="left">
                <Title responsiveSize={3}>More than just <br /> shorter links</Title>
                <Text responsiveSize={20}>Build your brand's recognitiob and get detailed insights on how your links are performing.</Text>
                <Button width={160} responsiveHeight={55} responsiveFontSize={18} responsiveWidth={180}>Get started</Button>
            </Container>
            <Container align="right">
                <Illustration src="./illustration-working.svg" alt="" widthImg={500} responsiveWidth={400}/>
            </Container>
        </Main>
     );
}
 
export default Hero;