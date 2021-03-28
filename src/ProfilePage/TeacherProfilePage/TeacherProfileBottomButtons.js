import React from "react";
import { Link } from "react-router-dom";
import "../../TeacherDashboard/ButtonStyle.css";

function TeacherProfileBottomButtons() {
	return (
		<div className="TeacherProfileBottomButtonContainer">
			<button className="BackToProjects">
				<Link to="/TeacherProjectsPage">BACK TO PROJECTS</Link>
			</button>
			<button className="helpcenterbutton">
				<Link to="/TeacherStudentProfileMain">BACK TO DASHBOARD</Link>

				{/* Dashboard should be defaulted to the Teacher Progress page according to the UX design. Will link it back to that page once that page is finalized. For now it is linked back to my TeacherStudentProfileMain page */}
			</button>
		</div>
	);
}

export default TeacherProfileBottomButtons;
