import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

export default function Navbar() {

  //change background on scroll
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(0);
  const handleClick = (index) => setActive(index);

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


  console.log(window.scrollY);




  // Nav items
  const navLink = ["Accueil", "Apropos", "Compétences", "Contactes"];
  return (
    <div className={`nav-link ${scroll ? 'scrolled' : ''}`}>
      <ul>
        {navLink.map((e, i) => (
          <li key={i} className={"link"} onClick={() => handleClick(i)}>
            <Link className={active === i ? "active" : "link"} to={e}>
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
