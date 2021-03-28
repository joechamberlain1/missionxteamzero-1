import React from "react";
import "./ButtonStyle.css";
import { Link } from "react-router-dom";

function MoreProjectsButton() {
	return (
		<button className="moreprojectsbutton">
			<Link to="/TeacherProjectsPage">More Projects</Link>
		</button>
	);
}

export default MoreProjectsButton;
