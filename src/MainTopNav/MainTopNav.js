import React from "react";
import LevelUpWorksLogo from "../img/logo.png";
import "./MainTopNavStyle.css";
import { Link } from "react-router-dom";
import flagnz from "../img/nzflag.png";
import flagmaori from "../img/maoriflag.png";
import "../TeacherDashboard/MainTemplate.css";
import SignUpModal from "../LogInSignUp/SignUpModal";
import LogInModal from "../LogInSignUp/LogInModal";

const MainTopNav = () => {
	return (
		<div className="TopNavMainBackground">
			<img src={LevelUpWorksLogo} alt="LevelUp Works Logo" />

			<div className="TopNavigationContainer">
				<div className="TopNavigation">
					<Link to="/">Home</Link>
					<li>Features</li>
					<li>Teachers</li>
				</div>
			</div>

			<div className="TopNavRegistrationContainer">
				<div className="DashboardTopNavFlags">
					LANG
					<img src={flagnz} alt="NZ Flag" />
					<img src={flagmaori} alt="Maori Flag" />
				</div>
				<div className="TopNavRegistrationSection">
					<SignUpModal /> | <LogInModal />
				</div>
			</div>
		</div>
	);
};

export default MainTopNav;
