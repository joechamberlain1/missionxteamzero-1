import React from "react";
import Nav from "../Components/nav.js";
import MainFooter from "../MainFooter/Footer.js";
import "./TeacherProjectPageStyle.css";
import ProjectGridImg from "./ProjectGridImg.js";
import TeacherProjectButtonsTop from "./TeacherProjectButtonsTop";

function TeacherProjectsPage() {
  return (
    <div className="webcontainer">
      <Nav />

      <div className="main-projectcontainer">
        <div className="projectSideBar">
          <h1>hello</h1>
        </div>
        <div className="projectContent">
          <h1>Projects</h1>
          <h4>
            Welcome to the project library. You can use the filters o nthe right
            to help you search for specific projects.
          </h4>
          <TeacherProjectButtonsTop />

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
