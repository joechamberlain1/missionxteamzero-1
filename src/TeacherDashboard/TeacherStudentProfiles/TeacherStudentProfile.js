import React from "react";
import "../MainTemplate.css";
import DashboardFooter from "../DashboardFooter";

import StudentProfileGrid from "./StudentProfileGrid";
import DashboardTopNav from "../DashboardTopNav";
import DashboardTopButtons from "../DashboardTopButtons";
import SideNav from "../SideNavigation/SideNav";
import PlaceHolderPic from "../../img/profilepicplaceholder.png";

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
							<StudentProfileGrid
								StudentImage={PlaceHolderPic}
								StudentName="Student Name Function"
							/>
							<StudentProfileGrid
								StudentImage={PlaceHolderPic}
								StudentName="Student Name Function"
							/>
							<StudentProfileGrid
								StudentImage={PlaceHolderPic}
								StudentName="Student Name Function"
							/>
							<StudentProfileGrid
								StudentImage={PlaceHolderPic}
								StudentName="Student Name Function"
							/>
						</div>
						<div className="grid-container"></div>
						<div className="grid-container"></div>
					</div>
				</div>
			</div>

			<DashboardFooter />
		</div>
	);
}

export default TeacherStudentProfile;
