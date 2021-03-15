import React from "react";
import HelpCenterButton from "./HelpCenterButton";
import MoreProjectsButton from "./MoreProjectsButton";
import TakeScreenShotButton from "./TakeScreenShotButton";
import "./MainTemplate.css";

function DashboardTopButtons() {
  return (
    <div className="DashboardButtonContainer">
      <TakeScreenShotButton />
      <HelpCenterButton />
      <MoreProjectsButton />
    </div>
  );
}

export default DashboardTopButtons;
