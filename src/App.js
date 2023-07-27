import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Skills from "./components/Skills";
import Divers from "./components/Divers";
import Alltech from "./components/tech_stack/Alltech";

function App() {
  // const [scroll, setscroll] = useState(0);

  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     setscroll(window.screenY);
  //     if (scroll > 0) {

  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll)

  // });

  return (
    <Router>
      <div className='full-container' >
        <div className="container">
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
