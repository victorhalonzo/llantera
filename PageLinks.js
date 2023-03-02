import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Bar } from "./Bar";
import Inicio from "../pages/Inicio";
import Llantas from "../pages/Llantas";
import { Footer } from "./Footer";

const PageLinks = () => {
  return (
    <div>
      <Router>
        <Bar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/llantas" element={<Llantas />} />
          {/*<Route path="*" component={Error404} />*/}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default PageLinks;