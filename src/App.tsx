import ShortInput from "./components/ShortInput/ShortInput"
import Hero from "./containers/Hero/hero"
import Navbar from "./containers/Navbar/Navbar"
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
        </Container>
      </ContainerGray>
    </>
  )
}

export default App
