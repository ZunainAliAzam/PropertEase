import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummyData";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="" />
                  <p>{singlePostData.address}</p>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="./utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="./pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Petd Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="./fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="./size.png" alt="" />
              <span>Square Footage</span>
              <p>{singlePostData.squareFeet} sq ft</p>
            </div>
            <div className="size">
              <img src="./bed.png" alt="" />
              <span>Bedrooms</span>
              <p>{singlePostData.bedRooms}</p>
            </div>
            <div className="size">
              <img src="./bath.png" alt="" />
              <span>Bathrooms</span>
              <p>{singlePostData.bathroom}</p>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="./school.png" alt="" />
              <span>School</span>
              <p>{singlePostData.school} sq ft</p>
            </div>
            <div className="feature">
              <img src="./pet.png" alt="" />
              <span>Bus Stop</span>
              <p>{singlePostData.bus}m away</p>
            </div>
            <div className="feature">
              <img src="./fee.png" alt="" />
              <span>Restaurants</span>
              <p>{singlePostData.restaurant}m away</p>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="map">
            <mapContainer>
              <Map items={[singlePostData]} />
            </mapContainer>
          </div>
          <div className="buttons">
            <button>
              <img src="./chat.png" alt="" />
              <span>Contact</span>
            </button>
            <button>
              <img src="./save.png" alt="" />
              <span>Save The Place</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
