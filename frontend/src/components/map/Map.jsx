import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/Pin";
import "./map.scss";
import "leaflet/dist/leaflet.css"; // Make sure to include this CSS for Leaflet

const Map = ({items}) => {
  const position = [items.latitude, items.longitude];

  return (
    <MapContainer
      className="map"
      center={position}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Pin />
    </MapContainer>
  );
};

export default Map;
