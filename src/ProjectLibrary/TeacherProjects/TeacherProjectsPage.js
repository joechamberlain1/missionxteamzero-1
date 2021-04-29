import React from "react";
import MainTopNav from "../../MainTopNav/MainTopNav.js";
import MainFooter from "../../MainFooter/MainFooter.js";
import ProjectSideBar from "../StudentProjectLibrary/ProjectGallerySideBar";
import TeacherProjectBottomButtons from "./TeacherProjectBottomButtons.js";
import "../StudentProjectLibrary/StudentProjectLib.css";
import LibraryPicture from "../StudentProjectLibrary/ProjectLibraryPicture";

function TeacherProjectsPage() {
	return (
		<div>
			<MainTopNav />

			<div className="MainPage">
				<div className="ProjectSideBar">
					<ProjectSideBar />
				</div>
				<div className="ProjectContainer">
					<div className="ProjectLibText">
						<h1>Projects</h1>
						<p>
							Welcome to the project library. You can use the filters on the
							right to help you search for specific projects.
						</p>
					</div>
					<div>
						<LibraryPicture path='/TeacherStudentProfile'/>
					</div>
					<TeacherProjectBottomButtons />
				</div>
			</div>

			<MainFooter />
		</div>
	);
}

export default TeacherProjectsPage;
