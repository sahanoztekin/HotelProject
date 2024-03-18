import React, { useState } from "react";
import CalanderLogoDark from "../../assets/images/calendardark.png";
import CalanderLogoLight from "../../assets/images/calendarlight.png";

const Calendar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="calendar"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="calendar-img">
        <img
          src={isHovered ? CalanderLogoDark : CalanderLogoLight}
          alt="calendarlogo"
        />
      </div>
      <h1>Our Price Guarantee</h1>
      <p>
        There are many vartions rem <br /> of passages Lorem Ipsum <br />{" "}
        available majority
      </p>
    </div>
  );
};

export default Calendar;
