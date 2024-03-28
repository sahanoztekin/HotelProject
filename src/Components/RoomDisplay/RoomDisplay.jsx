import React, { useState } from "react";
import "./RoomDisplay.css";
import Room1 from "../../assets/images/room1.png";
import Room2 from "../../assets/images/room2.png";
import Room3 from "../../assets/images/room3.jpg";

const RoomDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const panels = [
    {
      id: 1,
      title: "Standart Room",
      price: "$5.80",
      info: "Lorem Ipsum Lorem Ipsum is simply",
      imageUrl: Room1,
    },
    {
      id: 2,
      title: "Standart Room",
      price: "$5.80",
      info: "Lorem Ipsum Lorem Ipsum is simply",
      imageUrl: Room2,
    },
    {
      id: 3,
      title: "Standart Room",
      price: "$5.80",
      info: "Lorem Ipsum Lorem Ipsum is simply",
      imageUrl: Room3,
    },
  ];

  return (
    <div className="room-display-container">
      <div className="room-display-title">
        <h3>
          Popular <span>property</span>
        </h3>
        <div className="title-button">
          <p>
            Start planning the trip of your dreams with the help of 1000+
            articles on trivago magazine, ranging from
          </p>
          <button>View All </button>
        </div>
      </div>
      <div className="room-display-slider">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className={`panel ${activeIndex === panel.id ? "active" : ""}`}
            onClick={() => setActiveIndex(panel.id)}
            style={{ backgroundImage: `url(${panel.imageUrl})` }}
          >
            <div className="panel-content">
              <div className="panel-header">
                <div className="title">{panel.title}</div>
                <div className="price">{panel.price}</div>
              </div>
              <div className="info">{panel.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDisplay;
