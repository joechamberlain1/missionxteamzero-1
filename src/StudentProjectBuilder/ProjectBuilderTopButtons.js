import React from "react";
import "../TeacherDashboard/ButtonStyle.css";
import { Link } from "react-router-dom";
import "../TeacherDashboard/MainTemplate.css";

function ProjectBuilderTopButtons() {
	return (
		<div className="DashboardButtonContainer">
			<button className="TakeScreenshot">Take Screenshot</button>
			<button className="helpcenterbutton">Ask Teacher For help</button>
			<button className="moreprojectsbutton">
				<Link to="/StudentProjectLib">More Projects</Link>
			</button>
		</div>
	);
}

export default ProjectBuilderTopButtons;
