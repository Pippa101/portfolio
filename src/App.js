import "./App.css";
import Homepage from "./Homepage";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <img src={require("./images/Banner.jpg")} id="hero-img" alt="my art" />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
