import React from 'react'
import "./profileUpdatePage.scss"

const ProfileUpdatePage = () => {
  return (
    <div className="profileUpdatePage">
    <div className="formContainer">
      <form action=''>
        <h1>Update Profile</h1>
        <div className="item">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            
          />
        </div>
        <div className="item">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div className="item">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <button>Update</button>
      </form>
    </div>
    <div className="sideContainer">
      {/* <img src={avatar[0] || currentUser.avatar || "/noavatar.jpg"} alt="" className="avatar" />
      <UploadWidget
        uwConfig={{
          cloudName: "lamadev",
          uploadPreset: "estate",
          multiple: false,
          maxImageFileSize: 2000000,
          folder: "avatars",
        }}
        setState={setAvatar}
      /> */}
    </div>
  </div>
  )
}

export default ProfileUpdatePage
