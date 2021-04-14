import React from "react";
import ProjectBuilderSideBar from "./ProjectBuilderSideBar.js";
import DashboardFooter from "../TeacherDashboard/DashboardFooter";
import "../TeacherDashboard/MainTemplate.css";
import DashboardTopNav from "../TeacherDashboard/DashboardTopNav";
import ProjectBuilderTopButtons from "./ProjectBuilderTopButtons";

function ObjectivesProjectBuilder() {
	return (
		<div className="webcontainer">
			<DashboardTopNav />

			<div className="profile-main-container">
				<ProjectBuilderSideBar />
				<div className="DashboardContent">
					<ProjectBuilderTopButtons />

					<div className="profile-maininner-container"></div>
				</div>
			</div>
			<DashboardFooter />
		</div>
	);
}

export default ObjectivesProjectBuilder;
