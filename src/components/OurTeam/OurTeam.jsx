import React, { useRef, useEffect } from "react";
import "./OurTeam";
import ourTeam from "./data/ourTeam";

function OurTeam() {
    const teamArray = Object.entries(ourTeam);
    const teamRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    teamRef.current.classList.remove('noOpacity');
                    teamRef.current.classList.add("slideIn");
                }
            });
        }, { threshold: 0.5 });

        observer.observe(teamRef.current);

        return () => {
            observer.unobserve(teamRef.current);
        };
    }, []);

    return (
        <section className="ourTeam" id="ourTeam">
            <div className="ourTeamHeading">
                <h2>our</h2>
                <h2>team</h2>
            </div>

            <div className="theTeamDiv">
                <div className="theTeam noOpacity" ref={teamRef}>
                    {teamArray.map(([name, { image, role, description }]) => (
                        <div key={name} className="teamMember">
                            <div className="teamMemberImage" style={{ backgroundImage: `url(${image})` }}></div>

                            <div className="teamMemberInfo">
                                <h2 className="teamMemberName">{name}</h2>
                                <h3 className="teamMemberRole">{role}</h3>
                                <p className="teamMemberDescription">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurTeam;
