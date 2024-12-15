import React, { useContext, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import { Navigate, Outlet } from "react-router-dom";
import "./layout.scss";
import { AuthContext } from "../../context/AuthContext.jsx";

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

const RequireAuthLayout = () => {
  const { currentUser } = useContext(AuthContext);

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
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

export { Layout, RequireAuthLayout };
