import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OurWork.scss";
import ourWork from "./data/ourWork";

gsap.registerPlugin(ScrollTrigger);

function OurWork() {
  const [slidItems, setSlidItems] = useState([]);
  const sectionRef = useRef(null);

  function handleArrowClick(id) {
    setSlidItems((prevSlidItems) => {
      if (prevSlidItems.includes(id)) {
        return prevSlidItems.filter((item) => item !== id);
      } else {
        return [...prevSlidItems, id];
      }
    });
  }

  /* -------- GSAP ScrollTrigger -------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".workCard");

      cards.forEach((card) => {
        gsap.set(card, { opacity: 0, y: 60 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          end: "top 40%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              opacity: 0,
              y: 60,
              duration: 0.4,
              ease: "power2.in",
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ourWork" id="ourWork" ref={sectionRef}>
      {/* -------- background image -------- */}
      <img
        className="workBg"
        src="/assets/images/our-work/background.png"
        alt=""
      />

      {/* -------- section heading -------- */}
      <div className="sectionHeading">
        <h2>our</h2>
        <h2>work</h2>
      </div>

      {/* -------- work items list -------- */}
      <div className="workList">
        {ourWork.map((workItem) => (
          <div className="workCard" key={workItem.id}>
            {/* -------- text info -------- */}
            <div className="workInfo">
              <h3 className="workTitle">{workItem.name}</h3>
              <div className="workDate">
                <p className="workMonth">{workItem.month}</p>
                <p className="workYear">{workItem.year}</p>
              </div>
            </div>

            {/* -------- project image -------- */}
            <img
              className="workImage"
              src={workItem.image}
              alt={workItem.name}
            />

            {/* -------- arrow toggle -------- */}
            <div className="arrowWrapper">
              <button
                className="arrowIcon"
                aria-label={
                  slidItems.includes(workItem.id)
                    ? "Close project details"
                    : "View project details"
                }
                onClick={() => handleArrowClick(workItem.id)}
              >
                {slidItems.includes(workItem.id) ? (
                  <IoIosArrowRoundBack size={40} />
                ) : (
                  <IoIosArrowRoundForward size={40} />
                )}
              </button>
            </div>

            {/* -------- sliding overlay -------- */}
            <div
              className={`overlay ${slidItems.includes(workItem.id) ? "slideRight" : ""}`}
            >
              <p className="overlayText">{workItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurWork;
