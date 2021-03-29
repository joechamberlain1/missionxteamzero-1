import React from "react";
import "./MainTemplate.css";

import star from "../img/project-icons/Header2Logo.png";
import flagnz from "../img/nzflag.png";
import flagmaori from "../img/maoriflag.png";

function DashboardTopNav() {
	return (
		<div className="DashboardTopNavigation">
			{/*Logo */}
			<img src={star} alt="starlogo" />
			{/*nz flag and maori flag */}
			<div className="DashboardTopNavFlags">
				<img src={flagnz} alt="NZ Flag" />
				<img src={flagmaori} alt="Maori Flag" />
			</div>
		</div>
	);
}

export default DashboardTopNav;
