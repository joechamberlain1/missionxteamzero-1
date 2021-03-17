import React from "react";
import { Link } from "react-router-dom";
import "./SideNavTest.css";
import StudentProfileGridPic from "../TeacherStudentProfiles/StudentProfileGridPic";
import { SideNavData } from "./SideNavData";
import SideNavBottom from "./SideNavBottom";

function SideNavTestv2() {
  return (
    <div className="SideBarMainContainer">
      <div className="ProfilePicPlacementSideBar">
        <StudentProfileGridPic />
      </div>
      <div className="SideBarTopContent">
        {SideNavData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </div>
      <div className="SideBarButton">
        <h4>Button to pull menu</h4>
      </div>
      <SideNavBottom />
    </div>
  );
}

export default SideNavTestv2;
