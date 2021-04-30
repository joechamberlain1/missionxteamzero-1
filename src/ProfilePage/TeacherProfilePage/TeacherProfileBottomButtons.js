import React from "react";
import { Link } from "react-router-dom";
import "../../TeacherDashboard/ButtonStyle.css";

// Teacher profile page has 2x buttons

function TeacherProfileBottomButtons() {
	return (
		<div className="TeacherProfileBottomButtonContainer">
			<button className="BackToProjects">
				<Link to="/TeacherProjectsPage">BACK TO PROJECTS</Link>
			</button>
			<button className="helpcenterbutton">
				<Link to="/TeacherStudentProfile">BACK TO DASHBOARD</Link>
			</button>
		</div>
	);
}

export default TeacherProfileBottomButtons;
