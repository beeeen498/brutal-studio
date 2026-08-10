import React, { useState } from "react";
import "./BookMeeting.scss";

function BookMeeting(){
    const [isClicked, setIsClicked] = useState(false);
    let buttonText = useState("SEND");

    function handleSendClick(){
        setIsClicked(true);
    }

    return(
        <section className="bookMeeting" id="bookMeeting">
            <div className="bookMeetingMainContent">
                <div className={`bookMeetingLeft ${isClicked ? "zeroOpacity" : ""}`}>
                    <h2>book a meeting</h2>
                    <h2 className="withUs">with Us</h2>
                    <h2>Today</h2>
                </div>

                <div className="bookMeetingRight">
                    <input type="text" name="name" id="name" placeholder="Full Name" maxLength="20" required className="bookMeetingInput" />
                    <input type="email" name="email" id="email" placeholder="Enter Email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required className="bookMeetingInput" />
                    <textarea name="message" id="message" placeholder="How can we help?" required className="bookMeetingInput" wrap="soft"></textarea>
                    <button className={`bookMeetingInput ${isClicked ? "sendButtonClicked" : "sendButton"}`} type="submit" onClick={handleSendClick}>{`${isClicked ? "SENT!" : "SEND"}`}</button>
                </div>

            </div>

            <div className={`slidingText ${isClicked ? "slideUpAnimation" : ""}`}>
                <h2>our team will reach you soon!</h2>
            </div>

            <div className="atomImageDiv">
                <div className="atomImage"></div>
            </div>
        </section>
    );
};

export default BookMeeting;