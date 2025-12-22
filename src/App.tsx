import "./App.css";
import { useEffect, useState } from "react";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Langue from "./components/Langue";

type Language = "EN" | "FR";


function App() {
  const [lang, setLang] = useState<Language>("EN");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved === "EN" || saved === "FR") {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const next = lang === "EN" ? "FR" : "EN";
    setLang(next);
    localStorage.setItem("portfolio-lang", next);
  };

  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar lang={lang} />
        <Home lang={lang} />
      </div>
      <About lang={lang} />
      <div className="p-5 md:px-[15%]">
          <Experiences lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </div>
      <Footer lang={lang} />
      <Langue lang={lang} onToggle={toggleLang} />
    </div>
  );
}

export default App;
