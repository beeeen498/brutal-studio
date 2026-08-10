import React, { useRef, useEffect, useState } from "react";
import { FaLinkedinIn, FaXTwitter, FaDribbble } from "react-icons/fa6";
import "./OurTeam.scss";
import ourTeam from "./data/ourTeam";

function OurTeam() {
  const teamArray = Object.entries(ourTeam);
  const teamRef = useRef(null);
  const [flippedCard, setFlippedCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            teamRef.current.classList.remove("hidden");
            teamRef.current.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(teamRef.current);

    return () => {
      observer.unobserve(teamRef.current);
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
          {teamArray.map(([name, { image, role, description, socials }]) => (
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
                    <a href="#" className="socialLink">
                      <FaLinkedinIn />
                    </a>
                    <a href="#" className="socialLink">
                      <FaXTwitter />
                    </a>
                    <a href="#" className="socialLink">
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
