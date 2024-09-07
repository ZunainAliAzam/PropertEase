import React, { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
          <a href="" className="register">
            Sign Up
          </a>
          <div className="menuIcon">
            <img src="/menu.png" alt="menu" onClick={()=>setOpen((prev)=>!prev)}/>
          </div>
          <div className={open ? "menu active":"menu"}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
            <a href="">Listings</a>
            <a href="">Sign in</a>
            <a href="">Sign up</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
