import React from "react";
import { Link } from "react-router-dom";
import "./SideNavTest.css";
import StudentProfileGridPic from "../TeacherStudentProfiles/StudentProfileGridPic";
import { SideNavData } from "./SideNavData";

function SideNavTestv2() {
  return (
    <div className="SideBarContainer">
      {/* <SideNavTest /> */}
      <StudentProfileGridPic />
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
      <div className="sideBarInnerContainerFooter">
        <div className="SideBarBottomMenu">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default SideNavTestv2;
