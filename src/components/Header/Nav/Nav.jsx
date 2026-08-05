import React, { useState } from "react";
import "./Nav.scss";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "our story", id: "ourStory" },
    { label: "our team", id: "ourTeam" },
    { label: "our services", id: "ourServices" },
    { label: "our work", id: "ourWork" },
    { label: "book a meeting", id: "bookMeeting" },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); /* close menu after clicking a link */
  };

  return (
    <nav>
      {/* -------- hamburger button -------- */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>

      {/* -------- nav list -------- */}
      <ul className={`navList ${isOpen ? "showMenu" : ""}`}>
        {navItems.map((item) => (
          <li key={item.id} className="navListItem">
            <a href={`#${item.id}`} onClick={(e) => handleClick(e, item.id)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
