import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="left">
          {/* <a href="/">
            <img src="./logo" alt="logo" />
          </a> */}
          <span className="logo">PropertEase</span>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Listings</a>
        </div>
        <div className="right">
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
