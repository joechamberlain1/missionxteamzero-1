import React from "react";
import { Link } from "react-router-dom";
import "../StudentProjectLibrary/StudentProjectLib.css";

function TeacherProjectBottomButtons() {
	return (
		<div className="ProjectBottomButtonsContainer">
			<button onClick={scrollToTop} className="BackToTopButton">
				BACK TO TOP
			</button>
			<button className="helpcenterbutton">
				<Link to="/TeacherStudentProfile">BACK TO DASHBOARD</Link>
			</button>
		</div>
	);
}

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

export default TeacherProjectBottomButtons;
