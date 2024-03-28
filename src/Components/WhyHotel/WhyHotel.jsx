import React, { useState } from "react";
import "./WhyHotel.css";
import BlockImg from "../../assets/images/whyhotelimg.svg";
import SuitCase from "../../assets/images/suitcase.svg";
import SuitCaseWhite from "../../assets/images/suitcasewhite.svg";

const blocksContent = [
  {
    title: "Airport Transfer",
    content:
      "There are many variati orem passages of Lorem available, but the majority",
  },
  {
    title: "Card Access Lift",
    content:
      "There are many variati orem passages of Lorem available, but the majority",
  },
  {
    title: "Smart TV",
    content:
      "There are many variati orem passages of Lorem available, but the majority",
  },
  {
    title: "Fibre Internet",
    content:
      "There are many variati orem passages of Lorem available, but the majority",
  },
];

const WhyHotel = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <div className="why-hotel-container">
      <div className="why-hotel-content">
        <h1>
          <span>
            Why hotel <br /> book
          </span>{" "}
          with Hotelo?
        </h1>
        <p>
          Start planning the trip of your dreams with the help of 1000+ articles
          on trivago magazine, ranging from
        </p>
      </div>
      <div className="why-hotel-blocks">
        <img src={BlockImg} alt="roompicture" />

        {blocksContent.map((block, index) => (
          <div
            className="blocks"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            key={index}
          >
            <div
              className="suitcase-img"
              style={{
                backgroundColor: hoverIndex === index ? "#FFFFFF" : "#0c0e14",
              }}
            >
              <img
                src={hoverIndex === index ? SuitCase : SuitCaseWhite}
                alt="suitcase"
              />
            </div>
            <div className="suitcase-title">
              <h1>{block.title}</h1>
              <p>{block.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyHotel;
