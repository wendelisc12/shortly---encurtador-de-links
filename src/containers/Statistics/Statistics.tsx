import Statistic from "../../components/Statistic/Statistic";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import { HeaderStatistics, MainStatistics, SectionStatistics } from "./style";

const Statistics = () => {
    return ( 
        <SectionStatistics>
            <HeaderStatistics>
                <Title size={2}>Advanced Statistics</Title>
                <Text>Track how your links are performing across the web with our advanced statistics dashboard.</Text>
            </HeaderStatistics>

            <MainStatistics>
                <Statistic image="./icon-brand-recognition.svg" titulo="Brand Recognition" descricao="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."/>
                <Statistic image="./icon-detailed-records.svg" titulo="Deitaled Records" descricao="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."/>
                <Statistic image="./icon-fully-customizable.svg" titulo="Fully Customizable" descricao="Improve brand awareness and content discorverability through customizable links, supercharging audience engagement"/>
            </MainStatistics>
        </SectionStatistics>
     );
}
 
export default Statistics;