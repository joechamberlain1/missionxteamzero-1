import React from "react";
import Nav from "../Components/nav.js";
import MainFooter from "../MainFooter/Footer.js";
import "./TeacherProjectPageStyle.css";
import ProjectGridImg from "./ProjectGridImg.js";
// import TeacherProjectButtonsTop from "./TeacherProjectButtonsTop";
import LibButton from '../StudentProjectLibrary/ProjectLibButtons';
import ProjectSideBar from '../StudentProjectLibrary/ProjectGallerySideBar';

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
            Welcome to the project library. You can use the filters o nthe right
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
        </div>
      </div>

      <MainFooter />
    </div>
  );
}

export default TeacherProjectsPage;
