import React, { useRef, useEffect } from "react";
import "./OurTeam.scss";
import ourTeam from "./data/ourTeam";

function OurTeam() {
  const teamArray = Object.entries(ourTeam);
  const teamRef = useRef(null);

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
              {/* photo */}
              <div
                className="memberPhoto"
                style={{ backgroundImage: `url(${image})` }}
              ></div>

              {/* info */}
              <div className="memberInfo">
                <h2 className="memberName">{name}</h2>
                <h3 className="memberRole">{role}</h3>
                <p className="memberBio">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
