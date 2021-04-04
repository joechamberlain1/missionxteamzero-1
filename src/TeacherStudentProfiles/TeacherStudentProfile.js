import React from "react";
import "../TeacherDashboard/MainTemplate.css";
import DashboardFooter from "../TeacherDashboard/DashboardFooter";

import StudentProfileGrid from "./StudentProfileGrid";
import DashboardTopNav from "../TeacherDashboard/DashboardTopNav";
import DashboardTopButtons from "../TeacherDashboard/DashboardTopButtons";
import SideNav from "../TeacherDashboard/SideNavigation/SideNav";

function TeacherStudentProfile() {
	return (
		<div className="webcontainer">
			<DashboardTopNav />
			<div className="profile-main-container">
				<SideNav />
				<div className="DashboardContent">
					<DashboardTopButtons />
					<div className="profile-maininner-container">
						<div className="grid-container">
							<StudentProfileGrid />
							<StudentProfileGrid />
							<StudentProfileGrid />
							<StudentProfileGrid />
							<StudentProfileGrid />
						</div>
						<div className="grid-container">
							<StudentProfileGrid />
							<StudentProfileGrid />
							<StudentProfileGrid />
							<StudentProfileGrid />
							<StudentProfileGrid />
						</div>
						<div className="grid-container">
							<StudentProfileGrid />
							<StudentProfileGrid />
							<StudentProfileGrid />
							<StudentProfileGrid />
							<StudentProfileGrid />
						</div>
					</div>
				</div>
			</div>

			<DashboardFooter />
		</div>
	);
}

export default TeacherStudentProfile;
