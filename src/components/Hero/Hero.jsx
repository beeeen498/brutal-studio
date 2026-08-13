import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* -------- main content -------- */}
      <div className="heroContent">
        {/* left side - text */}
        <div className="heroLeft">
          <div className="heroText">
            <h1>brutalism</h1>
            <h1>is</h1>
            <h1>gentle</h1>
          </div>
        </div>

        {/* right side - image */}
        <div className="heroRight">
          <img src="/assets/images/hero/hero.jpg" alt="hero" />
        </div>
      </div>

      {/* -------- bottom strip -------- */}
      <div className="bottom">
        <div className="bottomLeft"></div>
      </div>

      {/* -------- scroll arrow -------- */}
      <div className="scrollArrow">
        <IoIosArrowDown />
      </div>
    </section>
  );
}

export default Hero;
