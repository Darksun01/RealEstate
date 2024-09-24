import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section id="getStarted" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Real Estate</span>
          <span className="secondaryText">
            Subscribe and find the attractive quotes from us
            <br />
            <br />
            You can email us your property requirements, and we will reach out
            as soon as we find a property that meets your needs. We're here to
            help you every step of the way
          </span>

          <button className="button">
            <a href="mailto:shadil.farooqui@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
