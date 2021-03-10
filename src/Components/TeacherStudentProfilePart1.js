import React from "react";
import TopNav2 from "./TopNavPart2";
import "../CSS/ProfileMainBackground.css";
import MainFooter2 from "./Footer2";
import SideNavTest from "./SideNavTest";
import ProfilePicPlaceHolder from "./ProfilePicPlaceHolder";
import { SideNavData } from "./SideNavData";
import "../CSS/SideNavTest.css";
import { Link } from "react-router-dom";

function TeacherStudentProfilePart1() {
  return (
    <div className="webcontainer">
      <TopNav2 />

      <div className="profile-main-container">
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

          <div className="SideBarBottomMenu">
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
          </div>
        </div>
        <div className="profile-inner-container">
          <h1>
            Hello plz halp me. Plz turn me into a reusable container /
            componenet somehow PLEASEEEEEEE
          </h1>
        </div>
      </div>

      {/* Turn that into a componenet and wrap around it somehow so it is reusable for other content ^^^ */}

      {/* Temp code so I can switch back and forth between profile info page and teachers students page */}
      {/* <MainFooter /> */}

      <MainFooter2 />
    </div>
  );
}

export default TeacherStudentProfilePart1;
