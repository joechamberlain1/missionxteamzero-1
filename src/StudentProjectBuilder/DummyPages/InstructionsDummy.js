import React from "react";
import ProjectBuilderSideBar from "../ProjectBuilderSideBar";
import ProjectBuilderTopButtons from "../ProjectBuilderTopButtons";
import MainDashboardFooter from "../../TeacherDashboard/DashboardFooter";
import DashboardTopNav from "../../TeacherDashboard/DashboardTopNav";
import "../../TeacherDashboard/MainTemplate.css";

// Use this as a template when creating a page

function InstructionsDummy() {
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

			<MainDashboardFooter />
		</div>
	);
}

export default InstructionsDummy;
