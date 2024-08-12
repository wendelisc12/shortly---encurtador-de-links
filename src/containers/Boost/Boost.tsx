import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import { BoostContainer } from "./style";

const Boost = () => {
    return ( 
       <BoostContainer>
            <Title size={2} responsiveSize={1.8} light>Boost your links today</Title>
            <Button width={170} responsiveHeight={50} responsiveFontSize={18} responsiveWidth={200}>Get Started</Button>
       </BoostContainer>
     );
}
 
export default Boost;