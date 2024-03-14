import React from "react";
import "./InputBar.css";

const InputBar = () => {
  return (
    <div className="inputbar-container">
      <input type="text" placeholder="Where Are You Going" />
      <input type="text" placeholder="Check In" />
      <input type="text" placeholder="Check out" />
      <button>Search Hotel</button>
    </div>
  );
};

export default InputBar;
