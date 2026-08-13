import React, { useRef, useState } from "react";
import gsap from "gsap";
import "./BookMeeting.scss";

function BookMeeting() {
  const [isClicked, setIsClicked] = useState(false);
  const [errors, setErrors] = useState({});
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const confirmationRef = useRef(null);

  /* -------- form field refs -------- */
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  function validateForm() {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nameRef.current.value.trim()) {
      newErrors.name = true;
    }
    if (
      !emailRef.current.value.trim() ||
      !emailPattern.test(emailRef.current.value)
    ) {
      newErrors.email = true;
    }
    if (!messageRef.current.value.trim()) {
      newErrors.message = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSendClick(e) {
    e.preventDefault();

    if (!validateForm()) return;

    setIsClicked(true);

    /* fade out heading and form, then show confirmation */
    const tl = gsap.timeline();

    tl.to([headingRef.current, formRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.out",
    }).to(confirmationRef.current, {
      opacity: 1,
      y: -20,
      duration: 0.6,
      ease: "power2.out",
    });
  }

  return (
    <section className="bookMeeting" id="bookMeeting">
      {/* -------- background image -------- */}
      <img
        className="sectionBg"
        src="/assets/images/contact-us/contact-us-background.png"
        alt=""
      />

      <div className="content">
        {/* -------- left heading -------- */}
        <div className="heading" ref={headingRef}>
          <h2>book a meeting</h2>
          <h2 className="withUs">with Us</h2>
          <h2>Today</h2>
        </div>

        {/* -------- right form -------- */}
        <form
          className="form"
          ref={formRef}
          onSubmit={handleSendClick}
          noValidate
        >
          <input
            type="text"
            placeholder="Full Name"
            maxLength="20"
            ref={nameRef}
            className={`input ${errors.name ? "inputError" : ""}`}
            onChange={() => setErrors((prev) => ({ ...prev, name: false }))}
          />
          <input
            type="email"
            placeholder="Enter Email"
            ref={emailRef}
            className={`input ${errors.email ? "inputError" : ""}`}
            onChange={() => setErrors((prev) => ({ ...prev, email: false }))}
          />
          <textarea
            placeholder="How can we help?"
            ref={messageRef}
            className={`input ${errors.message ? "inputError" : ""}`}
            wrap="soft"
            onChange={() => setErrors((prev) => ({ ...prev, message: false }))}
          ></textarea>
          <button className="input sendButton" type="submit">
            SEND
          </button>
        </form>
      </div>

      {/* -------- confirmation text -------- */}
      <div className="confirmation" ref={confirmationRef}>
        <h2>our team will reach you soon!</h2>
      </div>

      {/* -------- atom image -------- */}
      <div className="atomWrapper">
        <img
          className="atomImage"
          src="/assets/images/contact-us/atom.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default BookMeeting;
