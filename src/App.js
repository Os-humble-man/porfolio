import "./App.css";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="full-container">
        <div className="container">
          <Hero />
        </div>
      </div>
    </Router>
  );
}

export default App;
