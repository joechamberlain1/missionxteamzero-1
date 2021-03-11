import React from "react";
import "../CSS/SideNavTest.css";
import SideNavTest from "./SideNavTest";
import ProfilePicPlaceHolder from "./ProfilePicPlaceHolder";
import { SideNavData } from "./SideNavData";
import { Link } from "react-router-dom";

function SideNavTestv2() {
  return (
    <div className="SideBarContainer">
      {/* <SideNavTest /> */}
      <ProfilePicPlaceHolder />
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
      {/* <div className="sideBarInnerContainerFooter"> */}
      <div className="SideBarBottomMenu">
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
      </div>
      {/* </div> */}
    </div>
  );
}

export default SideNavTestv2;
