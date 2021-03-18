import React from "react";
import '../ofa/css/maindashboard.css';

import DashTopMenu from "./dashTopMenu";

import DashLeftNav from "../ofa/leftNavLayout2";

import DashFooter from "../TeacherDashboard/Footer2";

function MainDashboard() {
  return (
    <div className="webcontainer">
      <DashTopMenu />
      <div className="profile-main-container">
        <DashLeftNav />
        <div className="DashboardContent">
         
          <div className="profile-maininner-container">

          </div>
        </div>
      </div>

      <DashFooter />
    </div>
  );
}

export default MainDashboard;
