import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Skills from "./components/Skills";

function App() {

  return (
    <Router>
      <div className="full-container">
        <div className="container">
          <Hero />
          <About />
          <Skills />
        </div>
      </div>
    </Router>
  );
}

export default App;
