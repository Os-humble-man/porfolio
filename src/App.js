import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import Skills from "./components/Skills";
import Divers from "./components/Divers";
import Alltech from "./components/tech_stack/Alltech";
import { useEffect, useState } from "react";

function App() {

  const [scrollDown, setscrollDown] = useState(0);
  const handleScroll = event => {
    setscrollDown(event.currentTarget.scrollDown);
  }

  useEffect(()=>{

  },[])
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
        </div>
      </div>
    </Router>
  );
}

export default App;
