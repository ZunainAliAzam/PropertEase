import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummyData";
import { useLoaderData } from "react-router-dom";

const SinglePage = () => {
  const post = useLoaderData()
  console.log(post)
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
              <p>{singlePostData.squareFeet}</p>
            </div>
            <div className="size">
              <img src="./bed.png" alt="" />
              <p>{singlePostData.bedRooms} beds</p>
            </div>
            <div className="size">
              <img src="./bath.png" alt="" />
              <p>{singlePostData.bathroom} baths</p>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="./school.png" alt="" />
              <p>{singlePostData.school}</p>
            </div>
            <div className="feature">
              <img src="./pet.png" alt="" />
              <p>{singlePostData.bus}</p>
            </div>
            <div className="feature">
              <img src="./fee.png" alt="" />
              <p>{singlePostData.restaurant}</p>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
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
