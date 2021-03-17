import React from "react";
import "./SideNavTest.css";

function SideNavBottom() {
  return (
    <div>
      <div className="SideBarButton">
        <h4>Button to pull menu</h4>
      </div>

      <div className="SideBarBottomMenu">
        <h4>Profile</h4>
        <h4>Settings</h4>
        <h4>Log Out</h4>
      </div>
    </div>
  );
}

export default SideNavBottom;
