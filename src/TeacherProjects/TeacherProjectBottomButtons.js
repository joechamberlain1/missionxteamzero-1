import React from "react";
import { Link } from "react-router-dom";
import "../TeacherDashboard/ButtonStyle.css";

function TeacherProjectBottomButtons() {
	return (
		<div className="ProjectBottomButtonsContainer">
			<button onClick={scrollToTop} className="BackToTopButton">
				BACK TO TOP
			</button>
			<button className="helpcenterbutton">
				<Link to="/TeacherStudentProfile">BACK TO DASHBOARD</Link>

				{/* Dashboard should be defaulted to the Teacher Progress page according to the UX design. Will link it back to that page once that page is finalized. For now it is linked back to my TeacherStudentProfileMain page */}
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
