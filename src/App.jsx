import About from "./containers/about/index";
import Characters from "./containers/characters";
import Hero from "./containers/hero/index";
import Story from "./containers/story/index";
import Game from "./containers/game/index";
import Media from "./containers/midia/index";
import Faq from "./containers/perguntas/index";
import Futer from "./components/footer/index";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Story />
      <Characters />
      <Game />
      <Media />
      <Faq />
      <Futer />
      <GlobalStyle />
    </>
  );
}

export default App;
