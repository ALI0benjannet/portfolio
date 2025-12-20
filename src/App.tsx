import "./App.css";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/about";

function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About />
      <div className="p-5 md:px-[15%]">
        <Experiences />
      </div>
    </div>
  );
}

export default App;
