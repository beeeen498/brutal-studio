import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      {/* -------- main content -------- */}
      <div className="heroMainContent">
        <div className="mainContentLeftSide">
          <div className="mainContentLeftSideText">
            <h1>brutalism</h1>
            <h1>is</h1>
            <h1>gentle</h1>
          </div>
        </div>

        <div className="mainContentRightSide">
          {/* <img src="/assets/images/hero/hero.jpg" alt="" /> */}
        </div>
      </div>

      {/* -------- bottom strip -------- */}
      <div className="bottom">
        <div className="bottomLeft"></div>
      </div>
    </section>
  );
}

export default Hero;
