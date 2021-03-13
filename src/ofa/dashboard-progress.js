import React from "react";
import "../ofa/css/teacherpro.css";

import DashboardHeader from "../ofa/dashboard-header";

import Teacherb from "./progress-tracker";
import LeftNavigation from "./left-navigation";

import Tavitar from "../ofa/components/tavitar";
import MainFooter2 from "../TeacherDashboard/Footer2";

function DashboardProgress() {
  return (
    <div className="teacherpro-body">
      <DashboardHeader />

      <div className="teacherbody">
        <div className="left-side">
          <div className="leftnav">
            <Tavitar />
          </div>

          <div class="list-group">
            <LeftNavigation />
          </div>
        </div>

        <div className="rightSide-Body">
          <Teacherb />
        </div>
      </div>
      <MainFooter2 />
    </div>
  );
}

export default DashboardProgress;
