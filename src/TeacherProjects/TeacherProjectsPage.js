import React from "react";
import Nav from "../Components/nav.js";
import MainFooter from "../MainFooter/MainFooter.js";
import "./TeacherProjectPageStyle.css";
import ProjectGridImg from "./ProjectGridImg.js";
import LibButton from "../StudentProjectLibrary/ProjectLibButtons";
import ProjectSideBar from "../StudentProjectLibrary/ProjectGallerySideBar";
import TeacherProjectBottomButtons from "./TeacherProjectBottomButtons.js";

function TeacherProjectsPage() {
	return (
		<div>
			<Nav />

			<div className="main-projectcontainer">
				<div className="projectSideBar">
					<ProjectSideBar />
				</div>
				<div className="projectContent">
					<h1>Projects</h1>
					<h4>
						Welcome to the project library. You can use the filters on the right
						to help you search for specific projects.
					</h4>
					<LibButton />

					<div className="ProjectItems">
						<ProjectGridImg />
						<ProjectGridImg />
						<ProjectGridImg />
					</div>
					<div className="ProjectItems">
						<ProjectGridImg />
						<ProjectGridImg />
						<ProjectGridImg />
					</div>
					<div className="ProjectItems">
						<ProjectGridImg />
						<ProjectGridImg />
						<ProjectGridImg />
					</div>
					<TeacherProjectBottomButtons />
				</div>
			</div>

			<MainFooter />
		</div>
	);
}

export default TeacherProjectsPage;
