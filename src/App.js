import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
