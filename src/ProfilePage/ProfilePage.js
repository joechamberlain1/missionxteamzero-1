import React from "react";
import MainFooter from "../MainFooter/Footer.js";
import Nav from "../Components/nav.js";
import ProfilePic from "../img/profilepicplaceholder.png";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div>
      <Nav />
      <div className="profile-background">
        <div className="profile-container">
          <div className="main-profile-left">
            <img
              className="profile-pic"
              src={ProfilePic}
              alt="profileplaceholder"
            />
            <div className="profile-buttons">
              <button>Edit profile</button>
              <button>Change Photo</button>
            </div>
          </div>
          <div className="main-profile-details">
            <h1>Profile Name Function</h1>
            <div className="details-container">
              <div className="requiredDetails">
                <p>School</p>
              </div>
              <div className="returnedFunction">
                <p>Function for school name</p>
              </div>
            </div>
            <div className="details-container">
              <div className="requiredDetails">
                <p>Teacher</p>
              </div>
              <div className="returnedFunction">
                <p>Function for Teacher name</p>
              </div>
            </div>
            <div className="details-container">
              <div className="requiredDetails">
                <p>Course</p>
              </div>
              <div className="returnedFunction">
                <p>Function for Course name</p>
              </div>
            </div>
            <div className="details-container">
              <div className="requiredDetails">
                <p>Date of Birth</p>
              </div>
              <div className="returnedFunction">
                <p>Function for DOB</p>
              </div>
            </div>
            <div className="details-container">
              <div className="requiredDetails">
                <p>Contact No</p>
              </div>
              <div className="returnedFunction">
                <p>Function for Contact No</p>
              </div>
            </div>
            <div className="details-container">
              <div className="requiredDetails">
                <p>Email Address</p>
              </div>
              <div className="returnedFunction">
                <p>Function for Email</p>
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
