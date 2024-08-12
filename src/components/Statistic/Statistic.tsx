import Text from "../Text/Text";
import Title from "../Title/Title";
import { FloatingImage, ImageBox, StatitisContainer, Icon } from "./style";

type props = {
    image:string,
    titulo:string,
    descricao:string
}

const Statistic = ({image, titulo, descricao}:props) => {
    return (
        <StatitisContainer>
            <FloatingImage><ImageBox><Icon src={image} responsiveWidth={45} widthIcon={30} /></ImageBox></FloatingImage>
            <Title size={1.3}>{titulo}</Title>
            <Text>{descricao}</Text>
        </StatitisContainer>
    );
}

export default Statistic;