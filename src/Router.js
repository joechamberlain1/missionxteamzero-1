import React from "react";
import { Switch, Route } from "react-router-dom";
import TeacherProfilePage from "./ProfilePage/TeacherProfilePage/TeacherProfilePage";
import ProjectBuilderSideBar from "./StudentProjectBuilder/ProjectBuilderSideBar";
import StudentProjectBuilder from "./StudentProjectBuilder/StudentProjectBuilder";
import JohnnyHomePage from "../src/HomePageJohnnyPracticeFun/JohnnyHomePage";
import ProgressTrackerDummy from "./TeacherDashboard/DummyPages/ProgressTrackerDummy";
import HelpRequestDummy from "./TeacherDashboard/DummyPages/HelpRequestDummy";
import ProjectLibraryDummy from "./TeacherDashboard/DummyPages/ProgressTrackerDummy";
import TeacherProjectsPage from "./ProjectLibrary/TeacherProjects/TeacherProjectsPage";
import StudentProjectLib from "./ProjectLibrary/StudentProjectLibrary/StudentProjectLib";
import TeacherStudentProfile from "./TeacherDashboard/TeacherStudentProfiles/TeacherStudentProfile";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={JohnnyHomePage} />
			<Route exact path="/TeacherProfilePage" component={TeacherProfilePage} />
			<Route exact path="/StudentProjectLib" component={StudentProjectLib} />
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
			<Route
				exact
				path="/ProgressTrackerDummy"
				component={ProgressTrackerDummy}
			/>
			<Route
				exact
				path="/ProjectSubmissionsDummy"
				component={ProgressTrackerDummy}
			/>
			<Route exact path="/HelpRequestDummy" component={HelpRequestDummy} />
			<Route
				exact
				path="/ProjectLibraryDummy"
				component={ProjectLibraryDummy}
			/>
		</Switch>
	);
};

export default Router;
