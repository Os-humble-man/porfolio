import "./assets/css/App.css";
import About from "./components/About/About";
import Hero from "./components/Header/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import Skills from "./components/Skill/Skills";
import Divers from "./components/Others/Divers";
import Alltech from "./components/tech_stack/Alltech";
import { useEffect, useState } from "react";
import Project from "./components/Project/Project";
import Tab from "./components/tech_stack/Tab";
import { tabContent } from "./assets/data/data";

function App() {

  const [scrollDown, setscrollDown] = useState(0);
  const handleScroll = event => {
    setscrollDown(event.currentTarget.scrollDown);
  }

  useEffect(() => {

  }, [])
  console.log(scrollDown);

  return (
    <Router>
      <div className='full-container' >
        <div className="container" onScroll={handleScroll}>
          <Hero />
          <About />
          <Divers />
          <Skills />
          <Alltech />
          <Project />
        </div>
      </div>
    </Router>
  );
}

export default App;
