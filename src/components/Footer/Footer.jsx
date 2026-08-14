import React from "react";
import { FaLinkedinIn, FaXTwitter, FaDribbble } from "react-icons/fa6";
import "./Footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  const navItems = [
    { label: "home", id: "home" },
    { label: "our story", id: "ourStory" },
    { label: "our team", id: "ourTeam" },
    { label: "our services", id: "ourServices" },
    { label: "our work", id: "ourWork" },
    { label: "book a meeting", id: "bookMeeting" },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      {/* -------- background image -------- */}
      <img
        className="footerBg"
        src="/assets/images/footer/footer-background.png"
        alt=""
      />

      <div className="footerContent">
        {/* -------- top section: logo + nav columns -------- */}
        <div className="footerTop">
          {/* left — logo & tagline */}
          <div className="footerBrand">
            <img
              className="footerLogo"
              src="/assets/images/footer/footer-logo.png"
              alt="Brutal Studio logo"
            />
            <h2 className="footerTagline">brutal studio</h2>
            <p className="footerSlogan">brutalism is gentle</p>
          </div>

          {/* -------- bottom section: nav + contact -------- */}
          <div className="footerNav">
            {/* right — nav columns */}
            <div className="footerNavItems">
              {/* info column */}
              <div className="infoHeaderItems">
                <h3 className="footerHeader">info</h3>
                {navItems.map((item) => (
                  <p key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                    >
                      {item.label}
                    </a>
                  </p>
                ))}
              </div>

              {/* contact column */}
              <div className="contactHeaderItems">
                <h3 className="footerHeader">contact</h3>
                <div className="address">
                  <p>123 BRUTAL AV.</p>
                  <p>LOREM IPSUM</p>
                  <p>3004 CA.</p>
                </div>
                <p>+34 123 456 789</p>
                <p>HELLO@BRUTALISM.COM</p>
              </div>
            </div>
          </div>
        </div>

        {/* -------- bottom bar -------- */}
        <div className="footerBottom">
          <div className="footerSocials">
            <a href="#" className="socialLink" aria-label="LinkedIn profile">
              <FaLinkedinIn />
            </a>
            <a href="#" className="socialLink" aria-label="Twitter profile">
              <FaXTwitter />
            </a>
            <a href="#" className="socialLink" aria-label="Dribbble profile">
              <FaDribbble />
            </a>
          </div>

          <p className="footerCredit">
            Created by <a href="https://benkedem.co">Ben Kedem.</a> Inspired by{" "}
            <a
              href="https://www.freepik.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
