import React from "react";
import SideNavTestv2 from "../JohnnyTest/SideNavTestv2";
import TopNav3 from "../JohnnyTest/TopNavPart3.js";
import MainFooter2 from "./Footer2";
import DashboardTopButtons from "./DashboardTopButtons";
import "./MainTemplate.css";

// Use this as a template when creating a page

function MainTemplate() {
  return (
    <div className="webcontainer">
      <TopNav3 />

      <div className="profile-main-container">
        <SideNavTestv2 />
        <div className="DashboardContent">
          <DashboardTopButtons />
          <div className="profile-maininner-container"></div>
        </div>

        {/* Temp code so I can switch back and forth between profile info page and teachers students page */}
        {/* <MainFooter /> */}

        <MainFooter2 />
      </div>
    </div>
  );
}

export default MainTemplate;
