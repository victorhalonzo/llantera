import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Bulletin } from "../components/Bulletin";
import {Map} from "../components/Map";

const Inicio = () => {
    return (
      <div>
        <header className="App-header">
        <Header />
      </header>
      <main>
        <Slider />
        <div className="scrol"></div>
        <Bulletin />
        <Map />
      </main>
      </div>
    );
  };
  
  export default Inicio;