import React from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import logo from "./img/Red_Creative_Letter_K_Monogram_Logo__1_-removebg-preview.png";

export default function Navbar() {
  // Nav items
  const navLink = ["Accueil", "Apropos", "Compétences", "Contactes"];
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-link">
        <ul>
          {navLink.map((e, i) => (
            <li key={i}>
              <Link to={e}>{e}</Link>
            </li>
          ))}
          
          <div className="dark-mode-toggle">
            <FiSun />
            {/* <FiMoon /> */}
          </div>
        </ul>
      </div>

      <div className="hamburger-menu-btn">
        <CgMenuRightAlt />
        <CgClose />
      </div>
    </div>
  );
}
