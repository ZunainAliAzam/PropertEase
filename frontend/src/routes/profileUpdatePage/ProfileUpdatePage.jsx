import React, { useState } from "react";
import "./profileUpdatePage.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import apiRequests from "../../lib/apiRequests";

const ProfileUpdatePage = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventdefault();
    try {
      const response = await apiRequests.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      updateUser(response.data);
      navigate("/profile");
    } catch (err) {
      console.error("Error updating user:", err);
      setError("Failed to update user");
    }
  };
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleUpdate}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              efaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              efaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
          alt=""
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "lamadev",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
