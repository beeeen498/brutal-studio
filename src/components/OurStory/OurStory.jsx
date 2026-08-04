import React, { useState } from "react";
import "./OurStory";
import ourStory from "./data/ourStory";

function OurStory() {
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const isBigVisible = (value) => {
        return (
            (value <= 1) ||
            (value >= 90 && value <= 120) ||
            (value >= 190 && value <= 220) ||
            value >= 299
        );
    };

    return (
        <div className="ourStoryContainer" id="ourStory">
            <h2 className="ourStoryHeading">our story (so far)</h2>

            <div className="ourStory" style={{ transform: `translateX(-${sliderValue}%)` }}>
                {Object.entries(ourStory).map(([year, content], index) => (
                    <div
                        key={year}
                        className={`storyItem ${isBigVisible(sliderValue) ? "big" : "small"} visible`}
                    >
                        <div className="storyContent">
                            <div className="stryContentText">
                                <h2 className="storyYear">{year}</h2>
                                <p className="storyText">{content.text}</p>
                            </div>
                            <img className="storyImage" src={content.image} alt={`${year} Image`} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="sliderContainer">
                <input
                    type="range"
                    min="0"
                    max="300"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="slider"
                />
            </div>
        </div>
    );
}

export default OurStory;
