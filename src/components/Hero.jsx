import { useState, useEffect, useCallback } from "react";
import heroimg from "./img/oscar_-_img01.png";
import hand from "./img/waving-hand.png";
import Navbar from "./Navbar";
import SwichTheme from "./SwichTheme";
import TypeWriter from "./TypeWriter";
import CallToAction from "./CallToAction";





export default function Hero() {

  return (
    <div className="frame frame1">
      <div className={`header`}>
        <div className="logo">
          <div>Portfolio</div>
        </div>
        <Navbar />
        <SwichTheme />
      </div>
      <div className="left-side">
        <img src={heroimg} alt="hero image" />
      </div>
      <div className="right-side">
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
            <TypeWriter />
          </div>
          <div className="content">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              ipsa dolorem accusamus laudantium praesentium dolor corrupti.
            </span>
          </div>
        </div>
        <CallToAction />
      </div>
    </div>
  );
}
