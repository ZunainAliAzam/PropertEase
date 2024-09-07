import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./routes/homepage/homePage.jsx";
import "./layout.scss";

const App = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
