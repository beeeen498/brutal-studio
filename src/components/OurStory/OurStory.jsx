import React, { useState } from "react";
import "./OurStory.scss";
import ourStory from "./data/ourStory";

function OurStory() {
  const storyEntries = Object.entries(ourStory);
  const [activeIndex, setActiveIndex] = useState(0);

  /* -------- slide navigation -------- */
  function goToSlide(index) {
    setActiveIndex(index);
  }

  function handlePrev() {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }

  function handleNext() {
    setActiveIndex((prev) =>
      prev < storyEntries.length - 1 ? prev + 1 : prev,
    );
  }

  return (
    <section className="our-story" id="ourStory">
      {/* -------- heading -------- */}
      <h2 className="our-story__heading">our story (so far)</h2>

      {/* -------- slides -------- */}
      <div
        className="our-story__track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {storyEntries.map(([year, content], index) => (
          <div
            key={year}
            className={`our-story__slide ${index === activeIndex ? "our-story__slide--active" : "our-story__slide--inactive"}`}
          >
            <div className="our-story__content">
              <div className="our-story__text-block">
                <h2 className="our-story__year">{year}</h2>
                <p className="our-story__text">{content.text}</p>
              </div>
              <img
                className="our-story__image"
                src={content.image}
                alt={`${year}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* -------- timeline navigation -------- */}
      <div className="our-story__timeline">
        <div className="our-story__timeline-track">
          <div
            className="our-story__timeline-fill"
            style={{
              width: `${(activeIndex / (storyEntries.length - 1)) * 100}%`,
            }}
          />
        </div>

        <div className="our-story__timeline-labels">
          {storyEntries.map(([year], index) => (
            <button
              key={year}
              className={`our-story__timeline-label ${index === activeIndex ? "our-story__timeline-label--active" : ""}`}
              onClick={() => goToSlide(index)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStory;
