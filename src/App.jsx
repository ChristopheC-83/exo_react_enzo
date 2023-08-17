import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Accueil from "./pages/Accueil";
import NotFound from "./pages/NotFound";
import "./style/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="APP">
      <BrowserRouter>
      <Header />
        <Body>
          <Routes>
            <Route path="/" element={<Accueil />} />
            {/* <Route path="/services" element={<Services />} >
              <Route path="/services/financiers" element={<Financiers />} />
              <Route path="/services/techniques" element={<Techniques />} />
              <Route path="/services/juridiques" element={<Juridiques />} />

            </Route> */}
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Body>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
