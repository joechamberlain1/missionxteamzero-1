import React from "react";
import TopNav2 from "./TopNavPart2";
import "../CSS/ProfileMainBackground.css";
import MainFooter2 from "./Footer2";
import MainFooter from "./Footer";
import "../CSS/SideNavTest.css";
import StudentProfileGrid from "./StudentProfileGrid";
import SideNavTestv2 from "./SideNavTestv2";

function TeacherStudentProfilePart1() {
  return (
    <div className="webcontainer">
      <TopNav2 />

      <div className="profile-main-container">
        <SideNavTestv2 />
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

export default TeacherStudentProfilePart1;
