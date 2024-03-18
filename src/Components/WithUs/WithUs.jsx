import React from "react";
import "./WithUs.css";
import Calendar from "./Calendar"; // Calendar bileşeninizi doğru yoldan import ettiğinizi varsayıyorum.

const WithUs = () => {
  return (
    <div className="withus-container">
      <div className="withus-content">
        <h1>
          Why book <span>with us?</span>{" "}
        </h1>
        <p>
          Start planning the trip of your dreams with the help of 1000+ articles
          on <br />
          trivago magazine, ranging from
        </p>
      </div>
      <div className="withus-calendar">
        <Calendar />
        <Calendar />
        <Calendar />
        <Calendar />
      </div>
    </div>
  );
};

export default WithUs;
