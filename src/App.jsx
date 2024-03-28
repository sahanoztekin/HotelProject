import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Divider from "./Components/Divider/Divider";
import Home from "./Components/Home/Home";
import WithUs from "./Components/WithUs/WithUs";
import "./App.css";
import RoomDisplay from "./Components/RoomDisplay/RoomDisplay";
import WhyHotel from "./Components/WhyHotel/WhyHotel";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Divider className="full-width" />
      <Home />
      <div className="full-wrapper">
        <WithUs />
      </div>
      <RoomDisplay />
      <div className="full-wrapper">
        <WhyHotel />
      </div>
    </div>
  );
};

export default App;
