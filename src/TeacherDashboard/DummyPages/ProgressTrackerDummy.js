import React from "react";
import SideNav from "../SideNavigation/SideNav";
import DashboardTopNav from "../DashboardTopNav";
import MainDashboardFooter from "../DashboardFooter";
import DashboardTopButtons from "../DashboardTopButtons";
import "../MainTemplate.css";

// Dummy page for ProjectTracker so can show front end that the NavLink is working

function ProgressTrackerDummy() {
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

			<MainDashboardFooter />
		</div>
	);
}

export default ProgressTrackerDummy;
