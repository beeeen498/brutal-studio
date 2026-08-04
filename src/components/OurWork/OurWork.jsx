import React, { useState } from "react";
import "./OurWork";
import ourWork from "./data/ourWork";
import { IoIosArrowRoundForward } from "react-icons/io";

function OurWork() {
    const [slidItems, setSlidItems] = useState([]);

    function handleArrowClick(id) {
        setSlidItems((prevSlidItems) => {
            if (prevSlidItems.includes(id)) {
                return prevSlidItems.filter(item => item !== id);
            } else {
                return [...prevSlidItems, id];
            }
        });
    }

    return (
        <section className="ourWork" id="ourWork">
            <div className="ourWorkHeading">
                <h2>our</h2>
                <h2>work</h2>
            </div>

            <div className="workDiv">
                {ourWork.map((workItem) => (
                    <div className="work" key={workItem.id}>
                        <div className="workText">
                            <div className="workHeading">
                                <h3 className="workTitle">{workItem.name}</h3>
                            </div>
                            <div className="workTextParagraphs">
                                <p className="workMonth">{workItem.month}</p>
                                <p className="workYear">{workItem.year}</p>
                            </div>
                        </div>
                        <div className="workImage" style={{ backgroundImage: `url(${workItem.image})` }}></div>

                        <div className="arrowIconDiv">
                            <div className={`arrowIcon ${slidItems.includes(workItem.id) ? 'rotate' : ''}`} onClick={() => handleArrowClick(workItem.id)}>
                                <IoIosArrowRoundForward size={40} />
                            </div>
                        </div>

                        <div className={`slidingElement ${slidItems.includes(workItem.id) ? 'slideRight' : ''}`}>
                            <p className="slidingElementText">{workItem.description}</p> 
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurWork;
