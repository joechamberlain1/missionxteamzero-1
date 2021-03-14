import React from "react";
import project1 from "../img/Project -1@2x.jpg";
import "./TeacherProjectPageStyle.css";

function ProjectGridImg() {
  return (
    <div className="ProjectGridImg">
      <img src={project1} className="ProjectPic1" alt="Project 1" />
      <h2>Video Name Function</h2>
      <p>Level of content function</p>
    </div>
  );
}

export default ProjectGridImg;
