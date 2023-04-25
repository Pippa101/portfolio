import "./App.css";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Artwork from "./Artwork";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <img src={require("./images/Banner.jpg")} id="hero-img" alt="my art" />
      <nav id="navbar">
        <ul>
          <li>Artwork and Style</li>
          <li>Software Development</li>
          <li>About</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Artwork" element={<Artwork />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
