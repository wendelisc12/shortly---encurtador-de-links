import ShortInput from "./components/ShortInput/ShortInput"
import Boost from "./containers/Boost/Boost"
import Footer from "./containers/Footer/Footer"
import Hero from "./containers/Hero/hero"
import Navbar from "./containers/Navbar/Navbar"
import ShortenLinksList from "./containers/ShortenLinksList/ShortenLinksList"
import Statistics from "./containers/Statistics/Statistics"
import {Container, ContainerFooter, ContainerGray, GlobalStyle} from "./global"

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <ContainerGray>
        <Container>
          <ShortInput />
          <ShortenLinksList/>
          <Statistics/>
        </Container>
      </ContainerGray>
      <Boost/>
      <ContainerFooter>
        <Container>
          <Footer />
        </Container>
      </ContainerFooter>
    </>
  )
}

export default App
