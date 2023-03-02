import logo from "./logo.svg";
import "./App.css";
import { Bar } from "./components/Bar.js";

import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Bulletin } from "./components/Bulletin";
import PageLinks from "./components/PageLinks";

function App() {
  return (
    <div className="App">
      <PageLinks />
    </div>
  );
}

export default App;
