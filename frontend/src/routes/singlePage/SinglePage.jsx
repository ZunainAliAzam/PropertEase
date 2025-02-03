import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummyData";
import { useLoaderData } from "react-router-dom";

const SinglePage = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="" />
                  <p>{post.address}</p>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom">{post.postDetails.desc}</div>
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
                {post.postDetails.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="./pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetails.pet === "allowed" ? (
                  <p>Pet is Allowed</p>
                ) : (
                  <p>Pet is not allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="./fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.postDetails.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="./size.png" alt="" />
              <p>{post.postDetails.size} sqft</p>
            </div>
            <div className="size">
              <img src="./bed.png" alt="" />
              <p>{post.bedrooms} beds</p>
            </div>
            <div className="size">
              <img src="./bath.png" alt="" />
              <p>{post.bathrooms} baths</p>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="./school.png" alt="" />
              <p>{post.postDetails.school} School</p>
            </div>
            <div className="feature">
              <img src="./pet.png" alt="" />
              <p>{post.postDetails.bus} Bus</p>
            </div>
            <div className="feature">
              <img src="./fee.png" alt="" />
              <p>{post.postDetails.restaurant} Restaurant </p>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <mapContainer>
              <Map items={[post]} />
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
