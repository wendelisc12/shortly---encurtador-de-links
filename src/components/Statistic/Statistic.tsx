import Text from "../Text/Text";
import Title from "../Title/Title";
import { FloatingImage, ImageBox, StatitisContainer } from "./style";

type props = {
    image:string,
    titulo:string,
    descricao:string
}

const Statistic = ({image, titulo, descricao}:props) => {
    return (
        <StatitisContainer>
            <FloatingImage><ImageBox><img src={image} width='30' /></ImageBox></FloatingImage>
            <Title size={1.3}>{titulo}</Title>
            <Text>{descricao}</Text>
        </StatitisContainer>
    );
}

export default Statistic;