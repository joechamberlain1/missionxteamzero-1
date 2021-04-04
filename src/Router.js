import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "./ofa/HomePage/HomePage.js";
import TeacherStudentProfile from "./TeacherStudentProfiles/TeacherStudentProfile";
import TeacherProfilePage from "./ProfilePage/TeacherProfilePage/TeacherProfilePage";
import SignUp from "./LogInSignUp/SignUp.js";
import StudentProjectLib from "./StudentProjectLibrary/StudentProjectLib.js";
import ProjectBuilderSideBar from "./StudentProjectBuilder/ProjectBuilderSideBar";
import StudentProjectBuilder from "./StudentProjectBuilder/StudentProjectBuilder";
import MainDashProgress from "./ofa/mainDash-progress";
import TeacherProjectsPage from "./TeacherProjects/TeacherProjectsPage";

function Router() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/TeacherProfilePage" component={TeacherProfilePage} />
			<Route exact path="/SignUp" component={SignUp} />
			<Route exact path="/StudentProjectLib" component={StudentProjectLib} />
			<Route exact path="/mainDash-progress" component={MainDashProgress} />
			<Route
				exact
				path="/ProjectBuilderSideBar"
				component={ProjectBuilderSideBar}
			/>
			<Route
				exact
				path="/TeacherStudentProfile"
				component={TeacherStudentProfile}
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
		</Switch>
	);
}

export default Router;
