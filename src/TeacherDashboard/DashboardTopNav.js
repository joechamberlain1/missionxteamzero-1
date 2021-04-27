import React from "react";
import "./MainTemplate.css";
import { Link } from "react-router-dom";
import star from "../img/project-icons/Header2Logo.png";
import flagnz from "../img/nzflag.png";
import flagmaori from "../img/maoriflag.png";

function DashboardTopNav() {
	return (
		<div className="DashboardTopNavigation">
			<Link to="/">
				<img src={star} alt="starlogo" />
			</Link>

			<div className="DashboardTopNavFlags">
				<img src={flagnz} alt="NZ Flag" />
				<img src={flagmaori} alt="Maori Flag" />
			</div>
		</div>
	);
}

export default DashboardTopNav;
