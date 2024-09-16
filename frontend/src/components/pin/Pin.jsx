import React from "react";
import { Marker, Popup } from "react-leaflet";

const Pin = ({ item }) => {
  const position = [item.latitude, item.longitude];

  return (
    <div>
      <Marker position={position}>
        <Popup>
          <div className="popupContainer">
            <img src={item.images[0]} alt="" />
            <div className="textContainer">
              <Link to={`/${item.id}`}>{item.title}</Link>
              <span>{item.bedroom} bedroom</span>
              <b>$ {item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
};

export default Pin;
