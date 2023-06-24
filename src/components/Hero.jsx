import React from "react";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import heroimg from "./img/oscar_-_img01.png";
import hand from "./img/waving-hand.png";

export default function Hero() {
  const [theme, setTheme] = useState([]);
  const navLink = ["Accueil", "Apropos", "Compétences", "Contactes"];

  return (
    <div className="frame frame1">
      <div className="header">
        <div className="logo">
          <div>Portfolio</div>
        </div>
        <div className="nav-link">
          <ul>
            {navLink.map((e, i) => (
              <li key={i} className={e === "Accueil" ? "active" : "link"}>
                <Link className={e === "Accueil" ? "active" : "link"} to={e}>
                  {e}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="dark-mode-toggle"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? (
            <FiSun className="icon" />
          ) : (
            <FiMoon className="icon" />
          )}
        </div>

        <div className="hamburger-menu-btn">
          <CgMenuRightAlt />
          <CgClose />
        </div>
      </div>
      <div class="left-side">
        <img src={heroimg} alt="hero image" />
      </div>
      <div class="right-side">
        <div className="heading">
          <div className="header-level-1">
            <span>
              Salut{" "}
              <span className="hand">
                <img src={hand} alt="Hand waving" />
              </span>{" "}
            </span>
          </div>
          <div className="header-level-2">
            <span>Je suis Kanangila Oscar</span>
          </div>
          <div className="header-level-3">
            {/* <span>Je suis</span> */}
            <div>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Front-End developper")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Back-End developper")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Photographe")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Bienvenue a toi")
                    .typeString("!!!")
                    .start();
                }}
              />
            </div>
          </div>
          <div className="content">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              ipsa dolorem accusamus laudantium praesentium dolor corrupti.
            </span>
          </div>
        </div>
        <div className="btns">
          <span className="btn start">Commencer</span>
          <span className="btn project">Voir mes realisation</span>
        </div>
      </div>
    </div>
  );
}
