import React from 'react'
import "./slider.scss";

const Slider = ({images}) => {
  return (
    <div className='slider'>
      <div className="bigImage">
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImage">
        {images.slice(1).map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </div>
  )
}

export default Slider
