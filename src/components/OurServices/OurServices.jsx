import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OurServices.scss";
import ourServices from "./data/ourServices";

gsap.registerPlugin(ScrollTrigger);

function OurServices() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // -------- background image --------
  const accordionRef = useRef(null);

  useEffect(() => {
    if (!accordionRef.current) return;

    const ctx = gsap.context(() => {
      const items = accordionRef.current.querySelectorAll(".serviceItem");

      gsap.from(items, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: accordionRef.current,
          start: "top 75%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  if (ourServices && ourServices.length > 0) {
    return (
      <section className="ourServices" id="ourServices">
        {/* -------- background image -------- */}
        <img
          className="servicesBg"
          src="/assets/images/services-background.png"
          alt=""
        />

        {/* -------- heading -------- */}
        <div className="servicesHeading">
          <h2>our</h2>
          <h2>services</h2>
        </div>

        {/* -------- accordion -------- */}
        <div className="servicesAccordion" ref={accordionRef}>
          {ourServices.map((ourServicesItem) => (
            <div className="serviceItem" key={ourServicesItem.id}>
              {/* clickable title bar */}
              <div
                className="serviceTitle"
                onClick={() => handleSingleSelection(ourServicesItem.id)}
              >
                <h3 className="serviceName">{ourServicesItem.service}</h3>
                {selected === ourServicesItem.id ? (
                  <IoIosArrowUp className="serviceIcon" size={30} />
                ) : (
                  <IoIosArrowDown className="serviceIcon" size={30} />
                )}
              </div>

              {/* expandable description */}
              <div
                className={`serviceDescription ${selected === ourServicesItem.id ? "open" : "closed"}`}
              >
                {ourServicesItem.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  return null;
}

export default OurServices;
