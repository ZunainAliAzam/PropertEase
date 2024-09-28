import React, { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = () => {
    
  }
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="./arrow.png" alt="" />
          </div>

          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>

          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="./arrow.png" alt="" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}

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
