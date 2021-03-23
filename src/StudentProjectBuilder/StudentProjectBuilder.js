import React from "react";
import ProjectBuilderSideBar from "./ProjectBuilderSideBar";
import MainFooter2 from "../TeacherDashboard/Footer2";
import "../TeacherDashboard/MainTemplate.css";
import DashboardTopButtons from "../TeacherDashboard/DashboardTopButtons";
import TopNav3 from "../TeacherDashboard/TopNavPart3";

function StudentProjectBuilder() {
  return (
    <div className="webcontainer">
      <TopNav3 />

      <div className="profile-main-container">
        <ProjectBuilderSideBar />
        <div className="DashboardContent">
          <DashboardTopButtons />

          <div className="profile-maininner-container"></div>
        </div>
      </div>
      <MainFooter2 />
    </div>
  );
}

export default StudentProjectBuilder;
