
// Components
import Carrossel from "./components/Carroussel";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Carrossel />
      <div style={{height:"2000px"}}></div>
    </div>
  )
}

export default App
