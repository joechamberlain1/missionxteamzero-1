import React from "react";
import "./ButtonStyle.css";
import { Link } from "react-router-dom";
import "./MainTemplate.css";

// The 3 main top buttons that are stationed on the top right for TeacherDashboard / StudentBuilder page

function DashboardTopButtons() {
	return (
		<div className="DashboardButtonContainer">
			<button className="TakeScreenshot">Take Screenshot</button>
			<button className="helpcenterbutton">Help Center</button>
			<button className="moreprojectsbutton">
				<Link to="/TeacherProjectsPage">More Projects</Link>
			</button>
		</div>
	);
}

export default DashboardTopButtons;
