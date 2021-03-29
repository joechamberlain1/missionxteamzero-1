import React from "react";
import "../TeacherDashboard/MainTemplate.css";
import MainFooter2 from "../TeacherDashboard/Footer2";

import StudentProfileGrid from "./StudentProfileGrid";
import DashboardTopNav from "../TeacherDashboard/DashboardTopNav";
import DashboardTopButtons from "../TeacherDashboard/DashboardTopButtons";
import SideNav from "../TeacherDashboard/SideNavigation/SideNav";

function TeacherStudentProfileMain() {
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

			<MainFooter2 />
		</div>
	);
}

export default TeacherStudentProfileMain;
