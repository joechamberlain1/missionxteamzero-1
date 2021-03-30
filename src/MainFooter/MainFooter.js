import React from "react";
// Remove import link once finalized
import { Link } from "react-router-dom";
import "./MainFooterStyle.css";

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

				{/* Remove these temp test once finalized  */}
				<div className="ContentContainer">
					<h4>Johnny Temp Test</h4>
					<Link to="/TeacherProfilePage">Teacher Profile Page Test</Link>
					<Link to="/TeacherStudentProfileMain">
						Teacher Student Dashboard Profile Page TEST
					</Link>
					<Link to="/TeacherProjectsPage">Teacher Projects Page Test</Link>
				</div>
				<div className="ContentContainer">
					<h4>Joseph Temp Test</h4>
					<Link to="/studentProjectLib">Student Project Library Test</Link>
					<Link to="/StudentProjectBuilder">Student Project Builder Test</Link>
				</div>
				<div className="ContentContainer">
					<h4>Ofa Temp Test</h4>
					<Link to="/progress-tracker">ProgressTrackerPg</Link>
					<Link to="/help-request">HelpRequestsPg</Link>
					<Link to="/leftNavLayout2">LeftNavLayout2</Link>
					<Link to="/mainDash-progress">DashProgress</Link>
					<Link to="/mainDash-help">DashHelp</Link>
				</div>
			</div>
		</div>
	);
};

export default MainFooter;
