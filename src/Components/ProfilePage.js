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
        <img className="profile-pic" src={ProfilePic}/>
        <div className="profile-buttons">
        <button>Edit profile</button>
        <button>Change Photo</button>
        </div>
      </div>
      <div className="main-profile-details">
        <h1>Profile Name</h1>
        <div className="orange-box">
        <div className="green-box">
            <p>Hello box 1 left</p>
        </div>
        <div className="green-box">
            <p>Hello box 1 right</p>
        </div>
      </div>
      <div className="orange-box">
        <div className="green-box">
            <p>Hello box 2 left</p>
        </div>
        <div className="green-box">
            <p>Hello box 2 right</p>
        </div>
      </div>
      <div className="orange-box">
        <div className="green-box">
            <p>Hello box 3 left</p>
        </div>
        <div className="green-box">
            <p>Hello box 3 right</p>
        </div>
      </div>
      <div className="orange-box">
        <div className="green-box">
            <p>Hello box 4 left</p>
        </div>
        <div className="green-box">
            <p>Hello box 4 right</p>
        </div>

      </div>
      <div className="orange-box">
        <div className="green-box">
            <p>Hello box 5 left</p>
        </div>
        <div className="green-box">
            <p>Hello box 5 right</p>
        </div>
      </div>
      <div className="orange-box">
        <div className="green-box">
            <p>Hello box 6 left</p>
        </div>
        <div className="green-box">
            <p>Hello box 6 right</p>
        </div>
      </div>
      </div>
    </div>
    </div>

    <MainFooter />
    </div>
  );
}

export default ProfilePage;
