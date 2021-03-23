import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideNavStyle.css";
import StudentProfileGridPic from "../../TeacherStudentProfiles/StudentProfileGridPic";
import { SideNavData } from "./SideNavData";
import { SideNavBottomData } from "./SideNavBottomData";
import SideNavBottom from "./SideNavBottom";
import * as RiIcons from "react-icons/ri";

function SideNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => {
    setSidebar(true);
  };
  const hideSideBar = () => {
    setSidebar(false);
  };

  // Collapsed Sidebar data
  const showCollapsedSideBar = () => {
    return (
      <div className="SideBarCollapsed">
        <div className="ProfilePicPlacementSideBar">
          <StudentProfileGridPic />
        </div>

        <div className="SideBarTopContentCollapsed">
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

        {/* Manually added the collapsed icon so they appear in a collumn */}
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
    );
  };

  // Main Sidebar when it is opened
  const showMainSideBar = () => {
    return (
      <nav className="SideBarMainContainer active">
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
            <RiIcons.RiArrowLeftSFill onClick={hideSideBar} />
          </Link>
        </div>
        <SideNavBottom />
      </nav>
    );
  };

  return <>{sidebar ? showMainSideBar() : showCollapsedSideBar()}</>;
}

export default SideNav;
