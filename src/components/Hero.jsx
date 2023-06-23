import React from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import logo from "./img/Red_Creative_Letter_K_Monogram_Logo__1_-removebg-preview.png";

export default function Hero() {
  const navLink = ["Accueil", "Apropos", "Compétences", "Contactes"];

  return (
    <div className="full-container">
      <div className="frame1">
        <div className="header">
          <div className="logo">
            <div>Porfolio</div>
          </div>
          <div className="nav-link">
            <ul>
              {navLink.map((e, i) => (
                <li key={i}>
                  <Link to={e}>{e}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="dark-mode-toggle">
            <FiSun className="icon" />
            {/* <FiMoon className="icon"/> */}
          </div>

          <div className="hamburger-menu-btn">
            <CgMenuRightAlt />
            <CgClose />
          </div>
        </div>
        <div class="left-side">{/* img */}</div>
        <div class="right-side"></div>
      </div>
    </div>
  );
}
