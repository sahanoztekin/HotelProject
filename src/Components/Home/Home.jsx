import React from "react";
import "./Home.css";
import Homeİmages from "../../assets/images/HomeRoom.jpg";
import InputBar from "../InputBar/InputBar";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-tittle">
        <h1>
          <span>
            {" "}
            Gables <br /> Grand Plaza{" "}
          </span>{" "}
          Apartments
        </h1>
        <p>
          Find a home or space from our search. space Enter your specific
          location, property type, ur property type and price range.
        </p>
        <button>Know More</button>
      </div>
      <div className="home-images">
        <img src={Homeİmages} alt="homeimages" />
      </div>
      <InputBar />
    </div>
  );
};

export default Home;
