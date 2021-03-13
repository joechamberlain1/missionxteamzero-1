import React from "react";
import "../ofa/css/teacherpro.css";

import TopNav2 from "../TeacherDashboard/TopNavPart2";

import Teacherb from "./help-request";
import TeacherLNav from "../ofa/TeacherLNav";
import Tavitar from "../ofa/tavitar";
import MainFooter2 from "../TeacherDashboard/Footer2";

function DashboardHelp() {
  return (
    <div className="teacherpro-body">
      <TopNav2 />

      <div className="teacherbody">
        <div className="left-side">
          <div className="leftnav">
            <Tavitar />
          </div>

          <div class="list-group">
            <TeacherLNav />
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

export default DashboardHelp;
