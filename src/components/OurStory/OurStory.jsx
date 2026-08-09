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

  /* -------- keyboard navigation -------- */
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  /* -------- swipe support -------- */
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    const distance = touchStartX.current - touchEndX.current;
    const minSwipe = 50;

    if (distance > minSwipe) handleNext();
    if (distance < -minSwipe) handlePrev();
  }

  /* -------- parallax on mouse move -------- */
  function handleMouseMove(e) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * 20;
    e.currentTarget.querySelector(".storyImage").style.transform =
      `translate(${x}px, ${y}px)`;
  }

  function handleMouseLeave(e) {
    e.currentTarget.querySelector(".storyImage").style.transform =
      "translate(0, 0)";
  }

  /* -------- entrance animation -------- */
  const sectionRef = React.useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="ourStory" id="ourStory" ref={sectionRef}>
      <div className={`storyInner ${isVisible ? "visible" : ""}`}>
        {/* -------- heading -------- */}
        <h2 className="storyHeading">our story (so far)</h2>

        {/* -------- slide counter -------- */}
        <span className="storyCounter">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(storyEntries.length).padStart(2, "0")}
        </span>

        {/* -------- slides -------- */}
        <div
          className="storyTrack"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {storyEntries.map(([year, content], index) => (
            <div
              key={year}
              className={`storySlide ${index === activeIndex ? "active" : "inactive"}`}
            >
              <div
                className="storyContent"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="storyTextBlock">
                  <h2 className="storyYear">{year}</h2>
                  <p className="storyText">{content.text}</p>
                </div>
                <img
                  className="storyImage"
                  src={content.image}
                  alt={`${year}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* -------- timeline navigation -------- */}
        <div className="storyTimeline">
          <div className="timelineTrack">
            <div
              className="timelineFill"
              style={{
                width: `${(activeIndex / (storyEntries.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* -------- arrow buttons -------- */}
          <button
            className={`storyArrow arrowLeft ${activeIndex === 0 ? "hidden" : ""}`}
            onClick={handlePrev}
          >
            &#8592;
          </button>

          <button
            className={`storyArrow arrowRight ${activeIndex === storyEntries.length - 1 ? "hidden" : ""}`}
            onClick={handleNext}
          >
            &#8594;
          </button>

          <div className="timelineLabels">
            {storyEntries.map(([year], index) => (
              <button
                key={year}
                className={`timelineLabel ${index === activeIndex ? "activeLabel" : ""}`}
                onClick={() => goToSlide(index)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
