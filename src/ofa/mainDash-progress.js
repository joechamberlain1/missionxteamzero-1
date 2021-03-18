import React from "react";
import '../ofa/css/maindashboard.css';

import DashTopMenu from "./dashTopMenu";
import DashLeftNav from "./leftNavLayout2";
import DashFooter from "../TeacherDashboard/Footer2";
import ProgressTracker from "./progress-tracker";


function MainDashboard() {
  return (
    <div >
      <DashTopMenu />
      <div className="dashboard-body">
      <DashLeftNav />
        
        <div className="dashboard-content">
        <ProgressTracker/> 
          

          
        </div>
      </div>

      <DashFooter />
    </div>
  );
}

export default MainDashboard;
