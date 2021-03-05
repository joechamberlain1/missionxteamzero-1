import React from "react";
import "../CSS/ProfilePage.css";
import Nav from "./nav.js";
import MainFooter from "./Footer.js";
import ProfilePic from '../img/profilepicplaceholder.png';

function ProfilePage() {
  return (
      <div className="webcontainer">
    <Nav />
    <div className="profile-background">
    <div className="profile-container">
      <div className="main-profile-left">
      <div className="profile-pic">
<img src={ProfilePic} width="175px" height="175" />
      </div>
        <button>Edit profile</button>
        <button>Change Photo</button>
      </div>
      <div className="main-profile-details">
        <h1>Profile Name</h1>
        <p>Test 2</p>
      </div>
      </div>
    </div>
    <MainFooter />
    </div>
  );
}

export default ProfilePage;
