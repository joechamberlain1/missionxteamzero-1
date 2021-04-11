import React from "react";
import { Switch, Route } from "react-router-dom";
import TeacherStudentProfile from "./TeacherStudentProfiles/TeacherStudentProfile";
import TeacherProfilePage from "./ProfilePage/TeacherProfilePage/TeacherProfilePage";
import StudentProjectLib from "./StudentProjectLibrary/StudentProjectLib.js";
import ProjectBuilderSideBar from "./StudentProjectBuilder/ProjectBuilderSideBar";
import StudentProjectBuilder from "./StudentProjectBuilder/StudentProjectBuilder";
import MainDashProgress from "./ofa/mainDash-progress";
import TeacherProjectsPage from "./TeacherProjects/TeacherProjectsPage";
import JohnnyHomePage from "../src/HomePageJohnnyPracticeFun/JohnnyHomePage";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={JohnnyHomePage} />
			<Route exact path="/TeacherProfilePage" component={TeacherProfilePage} />
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
				activeStyle={{ color: "red" }}
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
};

export default Router;
