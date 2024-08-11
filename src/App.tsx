import Hero from "./containers/Hero/hero"
import Navbar from "./containers/Navbar/Navbar"
import {Container, GlobalStyle} from "./global"

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </>
  )
}

export default App
