import React from "react";
import ProjectBuilderSideBar from "./ProjectBuilderSideBar";
import DashboardFooter from "../TeacherDashboard/DashboardFooter";
import "../TeacherDashboard/MainTemplate.css";
import DashboardTopButtons from "../TeacherDashboard/DashboardTopButtons";
import DashboardTopNav from "../TeacherDashboard/DashboardTopNav";

function StudentProjectBuilder() {
	return (
		<div className="webcontainer">
			<DashboardTopNav />

			<div className="profile-main-container">
				<ProjectBuilderSideBar />
				<div className="DashboardContent">
					<DashboardTopButtons />

					<div className="profile-maininner-container"></div>
				</div>
			</div>
			<DashboardFooter />
		</div>
	);
}

export default StudentProjectBuilder;
