import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideNavTest.css";
import StudentProfileGridPic from "../TeacherStudentProfiles/StudentProfileGridPic";
import { SideNavData } from "./SideNavData";
import { SideNavBottomData } from "./SideNavBottomData";
import SideNavBottom from "./SideNavBottom";
import * as RiIcons from "react-icons/ri";

function SideNavTestv2() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      {/* Inactive Side bar / Collapsed */}
      <div className="SideBarCollapsed">
        <div className="ProfilePicPlacementSideBar">
          <StudentProfileGridPic />
        </div>

        <div className="SideBarTopContent">
          {SideNavData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>{item.icon}</Link>
              </li>
            );
          })}
        </div>

        <div className="SideBarButton">
          <Link to="#" className="menuArrows">
            <RiIcons.RiArrowRightSFill onClick={showSideBar} />
          </Link>
        </div>
        <div className="SideBarBottomCollapsed">
          {SideNavBottomData.map((item, index) => {
            return (
              <li key={index} className={item.BottomIconText}>
                <Link to={item.path}>{item.icon}</Link>
              </li>
            );
          })}
        </div>
      </div>

      {/* Sidebar Active */}

      <nav
        className={
          sidebar ? "SideBarMainContainer active" : "SideBarMainContainer"
        }
      >
        <div className="SideBarMainContainerToggle">
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
            <Link to="#" className="menuArrows">
              <RiIcons.RiArrowLeftSFill onClick={showSideBar} />
            </Link>
          </div>
          <SideNavBottom />
        </div>
      </nav>
    </>
  );
}

export default SideNavTestv2;
