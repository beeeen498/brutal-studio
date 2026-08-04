import React from "react";
import "./Header.scss";
import Nav from "./Nav/Nav";

function Header() {
  return (
    <header>
      {/* -------- top bar -------- */}
      <div className="topBar">
        <div className="logo">
          <div className="logoImage">
            <img src="/assets/images/logo.png" alt="logo" />
          </div>

          <h2 className="companyName">brutal studio</h2>
        </div>

        <Nav />
      </div>
    </header>
  );
}

export default Header;
