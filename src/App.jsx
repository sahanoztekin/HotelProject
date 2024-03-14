import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Divider from "./Components/Divider/Divider";
import Home from "./Components/Home/Home";
import InputBar from "./Components/InputBar/InputBar";
import WithUs from "./Components/WithUs/WithUs";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Divider className="full-width" />
      <Home />
      <div className="withus-wrapper">
        <WithUs />
      </div>
    </div>
  );
};

export default App;
