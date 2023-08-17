import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Accueil from "./pages/Accueil";
import NotFound from "./pages/NotFound";
import "./style/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boxy from "./pages/1_Boxy/Boxy";
import Slider from "./pages/2_Slider/Slider";
import Meteo from "./pages/3_Meteo/Meteo";
import Geodata from "./pages/4_Geodata/Geodata";
import Ide from "./pages/5_Ide/Ide";
import Pomodoro from "./pages/6_Pomodoro/Pomodoro";
import Audio from "./pages/8_Audio/Audio";
import Scroll from "./pages/9_Scroll/Scroll";
import Commerce from "./pages/10_Commerce/Commerce";
import Notes from "./pages/11_Notes/Notes";

function App() {
  return (
    <div className="APP">
      <BrowserRouter>
        <Header />
        <Body>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="*" element={<NotFound />} />
            <Route path="boxy" element={<Boxy />} />
            <Route path="slider" element={<Slider />} />
            <Route path="meteo" element={<Meteo />} />
            <Route path="geodata" element={<Geodata />} />
            <Route path="ide" element={<Ide />} />
            <Route path="pomodoro" element={<Pomodoro />} />
            <Route path="audio" element={<Audio />} />
            <Route path="scroll" element={<Scroll />} />
            <Route path="commerce" element={<Commerce />} />
            <Route path="notes" element={<Notes />} />
          </Routes>
        </Body>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
