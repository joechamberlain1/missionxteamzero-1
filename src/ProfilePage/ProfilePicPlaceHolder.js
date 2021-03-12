import React from "react";
import ProfilePic from "../img/profilepicplaceholder.png";
import "../CSS/ProfilePage.css";

function ProfilePicPlaceHolder() {
  return (
    <img className="profile-pic" src={ProfilePic} alt="profileplaceholder" />
  );
}

export default ProfilePicPlaceHolder;
