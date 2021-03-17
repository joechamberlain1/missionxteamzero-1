import React from "react";
import { SideNavBottomData } from "./SideNavBottomData";
import { Link } from "react-router-dom";
import "./SideNavTest.css";

function SideNavBottom() {
  return (
    <div>
      {/* <div className="SideBarButton">
        <h4>Button to pull menu</h4>
      </div> */}

      <div className="SideBarBottomMenu">
        {SideNavBottomData.map((item, index) => {
          return (
            <li key={index} className={item.BottomIconText}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default SideNavBottom;
