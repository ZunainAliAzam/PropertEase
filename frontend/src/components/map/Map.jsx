import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/Pin";
import "./map.scss";
import "leaflet/dist/leaflet.css";

const Map = ({ items }) => {
  const defaultPosition = [51.505, -0.09]; 
  const center =
    items.length > 0 && items[0].latitude && items[0].longitude
      ? [items[0].latitude, items[0].longitude]
      : defaultPosition;

  return (
    <MapContainer
      className="map"
      center={center}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} /> // Make sure to return the Pin component
      ))}
    </MapContainer>
  );
};

export default Map;
