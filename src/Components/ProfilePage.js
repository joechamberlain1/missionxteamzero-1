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
        <div className="profile-row">
          {/* Column1 */}
          <div className="profile-col">
            <ul className="profile-list">
              <li>School</li>
              <li>Teacher</li>
              <li>Course</li>
              <li>Date Of Birth</li>
              <li>Contact No</li>
              <li>Email Address</li>
            </ul>
                 {/* Column2 */}
          {/* <div className="profile-col">
            <ul className="profile-list">
              <li>School</li>
              <li>Teacher</li>
              <li>Course</li>
              <li>Date Of Birth</li>
              <li>Contact No</li>
              <li>Email Address</li>
            </ul>
            </div> */}

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
