import React, { useRef, useEffect, useState } from "react";
import { FaLinkedinIn, FaXTwitter, FaDribbble } from "react-icons/fa6";
import "./OurTeam.scss";
import ourTeam from "./data/ourTeam";

function OurTeam() {
  const teamArray = Object.entries(ourTeam);
  const teamRef = useRef(null);
  const [flippedCard, setFlippedCard] = useState(null);

  useEffect(() => {
    const node = teamRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.remove("hidden");
            node.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  function handlePhotoClick(name) {
    setFlippedCard(flippedCard === name ? null : name);
  }

  return (
    <section className="ourTeam" id="ourTeam">
      {/* -------- background image -------- */}
      <img
        className="teamBg"
        src="/assets/images/our-team/background.png"
        alt=""
      />

      {/* -------- heading -------- */}
      <div className="teamHeading">
        <h2>our</h2>
        <h2>team</h2>
      </div>

      {/* -------- team grid -------- */}
      <div className="teamGridWrapper">
        <div className="teamGrid hidden" ref={teamRef}>
          {teamArray.map(([name, { image, role, description }]) => (
            <div key={name} className="member">
              {/* photo — click to flip info */}
              <div className="memberPhotoWrapper">
                <img
                  className={`memberPhoto ${flippedCard === name ? "colorized" : ""}`}
                  src={image}
                  alt={name}
                  onClick={() => handlePhotoClick(name)}
                />
              </div>

              {/* flippable info block */}
              <div
                className={`memberInfoWrapper ${flippedCard === name ? "flipped" : ""}`}
              >
                {/* front — name + socials */}
                <div className="memberInfoFront">
                  <h2 className="memberName">{name}</h2>
                  <div className="memberSocials">
                    <a
                      href="#"
                      className="socialLink"
                      aria-label="LinkedIn profile"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#"
                      className="socialLink"
                      aria-label="Twitter profile"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      href="#"
                      className="socialLink"
                      aria-label="Dribbble profile"
                    >
                      <FaDribbble />
                    </a>
                  </div>
                </div>

                {/* back — role + bio */}
                <div className="memberInfoBack">
                  <h3 className="memberRole">{role}</h3>
                  <p className="memberBio">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
