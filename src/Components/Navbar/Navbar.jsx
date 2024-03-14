import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <h1 className="navbar-heading">
          Hotelo<span>.</span>
        </h1>
        <ul className="navbar-ul">
          <li>Home</li>
          <li>About Us</li>
          <li>Rooms</li>
          <li>Sales</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-button">
        <button className="booknow-btn">Book Now</button>
      </div>
    </div>
  );
};

export default Navbar;
