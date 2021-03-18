import React from "react";
import '../ofa/css/maindashboard.css';

import DashTopMenu from "./dashTopMenu";
import DashLeftNav from "./leftNavHelp";
import DashFooter from "../TeacherDashboard/Footer2";
import HelpRequest from "./help-request";


function MainDashboard() {
  return (
    <div >
      <DashTopMenu />
      <div className="dashboard-body">
      <DashLeftNav />
        
        <div className="dashboard-content">
        <HelpRequest/> 
          

          
        </div>
      </div>

      <DashFooter />
    </div>
  );
}

export default MainDashboard;
