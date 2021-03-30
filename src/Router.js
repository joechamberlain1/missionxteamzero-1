import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ImageAvatars from "./Components/ImageAvatars";
import TeacherStudentProfileMain from "./TeacherStudentProfiles/TeacherStudentProfileMain";
import TeacherProfilePage from "./ProfilePage/TeacherProfilePage/TeacherProfilePage";
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
			<Route exact path="/TeacherProfilePage" component={TeacherProfilePage} />
			<Route exact path="/ProfilePage" component={ProfilePage} />
			<Route exact path="/Login" component={LogIn} />
			<Route exact path="/SignUp" component={SignUp} />
			<Route exact path="/StudentProjectLib" component={StudentProjectLib} />

			{/* Ofa's DashboardProgress version 1  */}
			<Route exact path="/dashboard-progress" component={DashboardProgress} />

			{/* Ofa's duplicate of dashboard-progress, but with less components. May have to remove */}
			<Route exact path="/progress-tracker" component={ProgressTracker} />

			{/* Unsure why this 1 function has a page of its own, will most likely remove this. Unsure if this is a test? Ofa's work */}
			<Route exact path="/radio-button" component={RadioButton} />

			{/* Doesn't even work, function name is being exported as HelpT but componenet name is help-request. May have to fix for Ofa */}
			<Route exact path="/help-request" component={HelpRequest} />

			{/* Same as radio-button. Don't see this being used anywhere as well. */}
			<Route exact path="/ImageAvatars" component={ImageAvatars} />

			{/* Entire thing was giving a warning, have advised to clear warnings and look into it but ignored. */}
			{/* <Route exact path="/checkbox" component={Checkboxes} /> */}

			{/* Duplicate of help-request version 2, not working. Will remove */}
			<Route exact path="/dashboard-help" component={DashboardHelp} />

			{/* Not needed, unsure why an entire route page was needed to test 1 function. Componenet for functioning SideNav has been created. This needs to be removed  */}
			<Route exact path="/leftNavLayout2" component={LeftNavL2} />

			{/* Duplicate work of progress-tracker version 3, might use this one as it seems more complete. Can see multiple duplications of top nav and buttons as well, unsure of reasoning. */}
			<Route exact path="/mainDash-progress" component={MainDashProgress} />

			{/* Duplicate version 3 of dashboard-help, thorws alot of errors. */}
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
