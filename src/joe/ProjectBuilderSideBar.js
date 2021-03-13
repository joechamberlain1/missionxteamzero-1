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

      <div className="ProjectBuilderSideBarFooter">
      
      <Link to='/' ProfilePage className = 'StudentProjectBuilderLink'>
        <i className="fa fa-user-circle" aria-hidden="true"></i>
        <p>Profile</p>
      </Link>
      <Link to='/' className = 'StudentProjectBuilderLink'>
        <i className="fa fa-cog" aria-hidden="true"></i>
        <p>Settings</p>
      </Link>
      <Link to ='/' className = 'StudentProjectBuilderLink'>
        <i className="fa fa-angle-right"></i>
        <p>Sign Out</p>
      </Link>

      </div>
    </div>
  );
}

export default ProjectBuilderSideBar

