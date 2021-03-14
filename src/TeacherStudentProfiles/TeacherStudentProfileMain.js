import React from "react";
import TopNav2 from "../TeacherDashboard/TopNavPart2";
import "../TeacherDashboard/MainTemplate.css";
import MainFooter2 from "../TeacherDashboard/Footer2";
import MainFooter from "../MainFooter/Footer.js";
import "../CSS/SideNavTest.css";
import StudentProfileGrid from "./StudentProfileGrid";
import SideNavTestv2 from "../Components/SideNavTestv2";
import TakeScreenShotButton from "../TeacherDashboard/TakeScreenShotButton";
import HelpCenterButton from "../TeacherDashboard/HelpCenterButton";
import MoreProjectsButton from "../TeacherDashboard/MoreProjectsButton";

function TeacherStudentProfileMain() {
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
        <div className="profile-maininner-container">
          <div className="grid-container">
            <StudentProfileGrid />
            <StudentProfileGrid />
            <StudentProfileGrid />
            <StudentProfileGrid />
            <StudentProfileGrid />
          </div>
          <div className="grid-container">
            <StudentProfileGrid />
            <StudentProfileGrid />
            <StudentProfileGrid />
            <StudentProfileGrid />
            <StudentProfileGrid />
          </div>
          <div className="grid-container">
            <StudentProfileGrid />
            <StudentProfileGrid />
            <StudentProfileGrid />
            <StudentProfileGrid />
            <StudentProfileGrid />
          </div>
        </div>
      </div>

      {/* Turn that into a componenet and wrap around it somehow so it is reusable for other content ^^^ */}

      {/* Temp code so I can switch back and forth between profile info page and teachers students page */}
      {/* <MainFooter /> */}

      <MainFooter2 />
    </div>
  );
}

export default TeacherStudentProfileMain;
