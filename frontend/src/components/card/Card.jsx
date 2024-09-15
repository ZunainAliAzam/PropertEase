import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`${item.id}`} className="imgContainer">
        <img src={item.images} alt="" />
      </Link>
      <div className="textContainer"></div>
    </div>
  );
};

export default Card;
