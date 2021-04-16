import React from "react";
import { Switch, Route } from "react-router-dom";
import TeacherProfilePage from "./ProfilePage/TeacherProfilePage/TeacherProfilePage";
import ProjectBuilderSideBar from "./StudentProjectBuilder/ProjectBuilderSideBar";
import JohnnyHomePage from "../src/HomePageJohnnyPracticeFun/JohnnyHomePage";
import ProgressTrackerDummy from "./TeacherDashboard/DummyPages/ProgressTrackerDummy";
import HelpRequestDummy from "./TeacherDashboard/DummyPages/HelpRequestDummy";
import ProjectLibraryDummy from "./TeacherDashboard/DummyPages/ProgressTrackerDummy";
import TeacherProjectsPage from "./ProjectLibrary/TeacherProjects/TeacherProjectsPage";
import StudentProjectLib from "./ProjectLibrary/StudentProjectLibrary/StudentProjectLib";
import TeacherStudentProfile from "./TeacherDashboard/TeacherStudentProfiles/TeacherStudentProfile";
import ObjectivesProjectBuilder from "./StudentProjectBuilder/ObjectivesProjectBuilder";
import InstructionsDummy from "./StudentProjectBuilder/DummyPages/InstructionsDummy";
import VideoTutorialDummy from "./StudentProjectBuilder/DummyPages/VideoTutorialDummy";
import MakeProjectDummy from "./StudentProjectBuilder/DummyPages/MakeProjectDummy";
import SubmitProjectDummy from "./StudentProjectBuilder/DummyPages/VideoTutorialDummy";
import BonusChallengeDummy from "./StudentProjectBuilder/DummyPages/VideoTutorialDummy";
import TakeTheQuizDummy from "./StudentProjectBuilder/DummyPages/TakeTheQuizDummy";

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
				path="/ObjectivesProjectBuilder"
				component={ObjectivesProjectBuilder}
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
			<Route exact path="/InstructionsDummy" component={InstructionsDummy} />
			<Route exact path="/VideoTutorialDummy" component={VideoTutorialDummy} />
			<Route exact path="/MakeProjectDummy" component={MakeProjectDummy} />
			<Route exact path="/SubmitProjectDummy" component={SubmitProjectDummy} />
			<Route
				exact
				path="/BonusChallengeDummy"
				component={BonusChallengeDummy}
			/>
			<Route exact path="/TakeTheQuizDummy" component={TakeTheQuizDummy} />
		</Switch>
	);
};

export default Router;
