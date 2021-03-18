import React from "react";
import '../ofa/css/maindashboard.css';

import DashTopMenu from "./dashTopMenu";

import DashLeftNav from "../ofa/leftNavLayout2";

import DashFooter from "../TeacherDashboard/Footer2";

function MainDashboard() {
  return (
    <div >
      <DashTopMenu />
      <div className="dashboard-body">
        <DashLeftNav />
        <div className="dashboard-content">
         
          

          
        </div>
      </div>

      <DashFooter />
    </div>
  );
}

export default MainDashboard;
