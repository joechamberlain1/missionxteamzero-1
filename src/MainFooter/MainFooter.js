import React from "react";
// Remove import link once finalized
// import { Link, NavLink } from "react-router-dom";
import "./MainFooterStyle.css";

// Main reusable footer that could be called upon on different pages

const MainFooter = () => {
	return (
		<div className="MainFooterLayout">
			<div className="FooterContainer">
				<div className="ContentContainer">
					<h4>COMPANY</h4>
					<li>About Us</li>
					<li>Careers</li>
					<li>Partners</li>
				</div>
				<div className="ContentContainer">
					<h4>COURSES</h4>
					<li>Register</li>
					<li>Login</li>
					<li>Projects</li>
					<li>Teachers</li>
					<li>Parents</li>
					<li>Resources</li>
				</div>
				<div className="ContentContainer">
					<h4>SUPPORT</h4>
					<li>FAQs</li>
					<li>Helpdesk</li>
					<li>Contact Us</li>
				</div>
				<div className="ContentContainer">
					<h4>LEGAL</h4>
					<li>Terms & Conditions</li>
					<li>Privacy Policy</li>
				</div>
				<div className="ContentContainer">
					<h4>LevelUp Works</h4>
					<p>
						LevelUp Works is an Auckland-based enterprise dedicated to
						developing game-based learning software to help teachers in response
						to the New Zealand Digital Technologies & Hangarau Matchiko.
						alan@levelupworks.com (021) 668 185
					</p>
				</div>
			</div>
		</div>
	);
};

export default MainFooter;
