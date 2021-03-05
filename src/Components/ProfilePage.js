import React from "react";
import "../CSS/ProfilePage.css";
import Nav from "./nav.js";
import MainFooter from "./Footer.js";

function ProfilePage() {
  return (
      <div className="webcontainer">
    <Nav />
    <div className="profile-background">
    <div className="profile-container">
      <div className="main-profile-left">
        <h1>hello</h1>
        <p>Test 1</p>
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
