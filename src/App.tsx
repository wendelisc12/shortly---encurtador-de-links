import ShortInput from "./components/ShortInput/ShortInput"
import Hero from "./containers/Hero/hero"
import Navbar from "./containers/Navbar/Navbar"
import ShortenLinksList from "./containers/ShortenLinksList/ShortenLinksList"
import Statistics from "./containers/Statistics/Statistics"
import {Container, ContainerGray, GlobalStyle} from "./global"

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
    </>
  )
}

export default App
