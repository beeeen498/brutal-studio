import React from "react";
import "./Nav.scss";

function Nav() {
  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <ul className="navList">
        <li className="navListItem">
          <a href="#ourStory" onClick={(e) => handleClick(e, "ourStory")}>
            our story
          </a>
        </li>
        <li className="navListItem">
          <a href="#ourTeam" onClick={(e) => handleClick(e, "ourTeam")}>
            our team
          </a>
        </li>
        <li className="navListItem">
          <a href="#ourServices" onClick={(e) => handleClick(e, "ourServices")}>
            our services
          </a>
        </li>
        <li className="navListItem">
          <a href="#ourWork" onClick={(e) => handleClick(e, "ourWork")}>
            our work
          </a>
        </li>
        <li className="navListItem">
          <a href="#bookMeeting" onClick={(e) => handleClick(e, "bookMeeting")}>
            book a meeting
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
