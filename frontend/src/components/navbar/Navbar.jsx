import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="left">
          <span className="logo">PropertEase</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/listings">Listings</Link>
        </div>
        <div className="right">
          <Link to="/signin">Sign In</Link>
          <Link to="/signup" className="register">
            Sign Up
          </Link>
          <div className="menuIcon">
            <img
              src="/menu.png"
              alt="menu"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/agents">Agents</Link>
            <Link to="/listings">Listings</Link>
            <Link to="/signin">Sign in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
