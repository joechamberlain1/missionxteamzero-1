import React from "react";
import ProjectBuilderSideBar from "./ProjectBuilderSideBar";
import TopNav2 from "../TeacherDashboard/TopNavPart2";
import MainFooter2 from "../TeacherDashboard/Footer2";
import HelpCenterButton from "../TeacherDashboard/HelpCenterButton";
import MoreProjectsButton from "../TeacherDashboard/MoreProjectsButton";
import TakeScreenShotButton from "../TeacherDashboard/TakeScreenShotButton";
import "../TeacherDashboard/MainTemplate.css";

// Use this as a template when creating a page

function MainTemplate() {
  return (
    <div className="webcontainer">
      <TopNav2 />

      <div className="profile-main-container">
        <ProjectBuilderSideBar />
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
