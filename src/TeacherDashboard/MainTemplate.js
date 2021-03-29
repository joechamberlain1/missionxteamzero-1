import React from "react";
import SideNav from "./SideNavigation/SideNav";
import DashboardTopNav from "../TeacherDashboard/DashboardTopNav";
import MainFooter2 from "./Footer2";
import DashboardTopButtons from "./DashboardTopButtons";
import "./MainTemplate.css";

// Use this as a template when creating a page

function MainTemplate() {
	return (
		<div className="webcontainer">
			<DashboardTopNav />
			<div className="profile-main-container">
				<SideNav />
				<div className="DashboardContent">
					<DashboardTopButtons />
					<div className="profile-maininner-container"></div>
				</div>
			</div>

			<MainFooter2 />
		</div>
	);
}

export default MainTemplate;
