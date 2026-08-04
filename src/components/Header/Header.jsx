import React from "react";
import "./Header.scss";
import Nav from "./Nav/Nav";

function Header() {
  return (
    <header id="home">
      <div className="logo">
        <div className="logoImage">
          <img src="/public/assets/images/logo.png" alt="logo" />
        </div>
        <h2 className="companyName">brutal studio</h2>
      </div>

      <Nav />
    </header>
  );
}

export default Header;
