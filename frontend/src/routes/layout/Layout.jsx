import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import HomePage from "../homepage/homePage.jsx";
import { Outlet } from "react-router-dom";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
