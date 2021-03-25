import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ImageAvatars from "./Components/ImageAvatars";
import TeacherStudentProfileMain from "./TeacherStudentProfiles/TeacherStudentProfileMain";
import ProfilePage from "./ProfilePage/ProfilePage";
import LogIn from "./LogInSignUp/Login";
import SignUp from "./LogInSignUp/SignUp.js";
import StudentProjectLib from "./StudentProjectLibrary/StudentProjectLib.js";
import ProjectBuilderSideBar from "./StudentProjectBuilder/ProjectBuilderSideBar";
import StudentProjectBuilder from "./StudentProjectBuilder/StudentProjectBuilder";
import HelpRequest from "./ofa/help-request";
import ProgressTracker from "./ofa/progress-tracker";
import DashboardProgress from "./ofa/dashboard-progress";
import DashboardHelp from "./ofa/dashboard-help";
// import Checkboxes from "./ofa/checkbox";
import RadioButton from "./ofa/radio-button";
import MainDashProgress from "./ofa/mainDash-progress";
import MainDashHelp from "./ofa/mainDash-help";
import LeftNavL2 from "./ofa/leftNavLayout2";
import TeacherProjectsPage from "./TeacherProjects/TeacherProjectsPage";
import MainTemplate from "./TeacherDashboard/MainTemplate";

function Router() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/ProfilePage" component={ProfilePage} />
			<Route exact path="/Login" component={LogIn} />
			<Route exact path="/SignUp" component={SignUp} />
			<Route exact path="/StudentProjectLib" component={StudentProjectLib} />
			<Route exact path="/dashboard-progress" component={DashboardProgress} />
			<Route exact path="/progress-tracker" component={ProgressTracker} />
			<Route exact path="/radio-button" component={RadioButton} />
			<Route exact path="/help-request" component={HelpRequest} />
			<Route exact path="/ImageAvatars" component={ImageAvatars} />
			{/* <Route exact path="/checkbox" component={Checkboxes} /> */}
			<Route exact path="/dashboard-help" component={DashboardHelp} />
			<Route exact path="/leftNavLayout2" component={LeftNavL2} />
			<Route exact path="/mainDash-progress" component={MainDashProgress} />
			<Route exact path="/mainDash-help" component={MainDashHelp} />
			<Route
				exact
				path="/ProjectBuilderSideBar"
				component={ProjectBuilderSideBar}
			/>
			<Route
				exact
				path="/TeacherStudentProfileMain"
				component={TeacherStudentProfileMain}
			/>
			<Route
				exact
				path="/StudentProjectBuilder"
				component={StudentProjectBuilder}
			/>
			<Route
				exact
				path="/TeacherProjectsPage"
				component={TeacherProjectsPage}
			/>
			<Route exact path="/maintemplate" component={MainTemplate} />
		</Switch>
	);
}

export default Router;
