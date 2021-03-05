import React from "react";
import "../CSS/ProfilePage.css";
import Nav from "./nav.js";
import MainFooter from "./Footer.js";

function ProfilePage() {
  return (
    <div className="main-background">
      <Nav />
      <div className="main-profile-left">
        <h1>hello</h1>
      </div>
      <div className="main-profile-details">
        <h1>hello2</h1>
      </div>
      <MainFooter />
    </div>
  );
}

export default ProfilePage;
