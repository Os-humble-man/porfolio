import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

export default function Navbar() {

  //change background on scroll
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);
  }

  window.addEventListener('scroll', handleScroll);
  // Nav items
  const navLink = ["Accueil", "Apropos", "Compétences", "Contactes"];
  return (
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

      <div className="hamburger-menu-btn">
        <CgMenuRightAlt />
        <CgClose />
      </div>
    </div>
  );
}
