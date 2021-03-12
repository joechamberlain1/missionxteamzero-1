import React from "react";
import SideNavTestv2 from "../Components/SideNavTestv2";
import TopNav2 from "./TopNavPart2";
import MainFooter2 from "./Footer2";
import HelpCenterButton from "./HelpCenterButton";
import MoreProjectsButton from "./MoreProjectsButton";
import TakeScreenShotButton from "./TakeScreenShotButton";
import "./MainTemplate.css";

// Use this as a template when creating a page

function MainTemplate() {
  return (
    <div className="webcontainer">
      <TopNav2 />

      <div className="profile-main-container">
        <SideNavTestv2 />
        <div className="ButtonContainer">
          <TakeScreenShotButton />
          <HelpCenterButton />
          <MoreProjectsButton />
        </div>
        <div className="profile-maininner-container"></div>
      </div>

      {/* Turn that into a componenet and wrap around it somehow so it is reusable for other content ^^^ */}

      {/* Temp code so I can switch back and forth between profile info page and teachers students page */}
      {/* <MainFooter /> */}

      <MainFooter2 />
    </div>
  );
}

export default MainTemplate;
