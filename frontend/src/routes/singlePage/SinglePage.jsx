import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { listData } from "../../lib/dummyData";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>apartment 1</h1>
                <div className="address">
                  <img src="./pin.png" alt="" />
                  <p>1533 Rixon Way</p>
                </div>
                <div className="price">$1200</div>
              </div>
              <div className="user">
                <img src="./person.png" alt="" />
                <span>John Doe</span>
              </div>
            </div>
            <div className="bottom">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              placeat odio porro, ullam minus unde in, aut corporis illo magni
              repellat corrupti eos dolorem et incidunt quos alias ipsam
              architecto?
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  );
};

export default SinglePage;
