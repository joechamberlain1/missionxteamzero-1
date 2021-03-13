import React from "react";
import { Link } from "react-router-dom";
import "./css/projectsidebar.css";
import { ProjectSideBarData } from "./ProjectBuilderSideBarData.js";

function ProjectBuilderSideBar() {
  return (
    <div className="SideBarContainer">
      {/* <SideNavTest /> */}
      {ProjectSideBarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
      <div className="sideBarInnerContainerFooter">
        <div className="SideBarBottomMenu">
        <i class="fa fa-user-circle" aria-hidden="true"></i><p>Profile</p>
        <i class="fa fa-user-circle" aria-hidden="true"></i><p>Settings</p>
        <i class="fa fa-user-circle" aria-hidden="true"></i> <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectBuilderSideBar

