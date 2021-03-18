import React from "react";
import "../TeacherDashboard/MainTemplate.css";
import MainFooter2 from "../TeacherDashboard/Footer2";
import "../JohnnyTest/SideNavTest.css";
import StudentProfileGrid from "./StudentProfileGrid";
import SideNavTestv2 from "../JohnnyTest/SideNavTestv2";
import TopNav3 from "../JohnnyTest/TopNavPart3";
import DashboardTopButtons from "../TeacherDashboard/DashboardTopButtons";

function TeacherStudentProfileMain() {
  return (
    <div className="webcontainer">
      <TopNav3 />
      <div className="profile-main-container">
        <SideNavTestv2 />
        <div className="DashboardContent">
          <DashboardTopButtons />
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
      </div>

      <MainFooter2 />
    </div>
  );
}

export default TeacherStudentProfileMain;