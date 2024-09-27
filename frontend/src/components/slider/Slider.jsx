import React, { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  return (
    <div className="slider">
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImage">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setImageIndex(index(index + 1))}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
