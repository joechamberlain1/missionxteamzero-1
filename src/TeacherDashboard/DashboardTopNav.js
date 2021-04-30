import React from "react";
import "./MainTemplate.css";
import { Link } from "react-router-dom";
import star from "../img/project-icons/Header2Logo.png";
import flagnz from "../img/nzflag.png";
import flagmaori from "../img/maoriflag.png";

// Top navigation bar for the TeacherDashboard / Student Profile builder template

const DashboardTopNav = () => {
	return (
		<div className="DashboardTopNavigation">
			<Link to="/">
				{/* Quick link to navigate back to the home page */}
				<img src={star} alt="starlogo" />
			</Link>

			<div className="DashboardTopNavFlags">
				<img src={flagnz} alt="NZ Flag" />
				<img src={flagmaori} alt="Maori Flag" />
			</div>
		</div>
	);
};

export default DashboardTopNav;
