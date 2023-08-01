import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

export default function Navbar() {

  //change background on scroll
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])




  // Nav items
  const navLink = ["Accueil", "Apropos", "Compétences", "Contactes"];
  return (
    <div className={`nav-link ${scroll ? 'scrolled' : ''}`}>
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
