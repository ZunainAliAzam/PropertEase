import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navbar.scss";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <nav>
        <div className="left">
          <Link to="/">
            <span className="logo">PropertEase</span>{" "}
          </Link>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
          <Link to="/list">Listings</Link>
        </div>
        <div className="right">
          {currentUser ? (
            <div className="user">
              <img src={currentUser.avatar || "noavatar.jpg"} alt="user" />
              <span>
                Welcome,
                {" " +
                  currentUser.username.charAt(0).toUpperCase() +
                  currentUser.username.slice(1)}
              </span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login" className="register">
                Sign In
              </Link>
              <Link to="/register" className="register">
                Sign Up
              </Link>
            </>
          )}
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
