import React from "react";
import project1 from "../img/project-icons/Projectvid01.png";
import "./TeacherProjectPageStyle.css";

function ProjectGridImg() {
	return (
		<div className="ProjectGridImg">
			<img src={project1} className="ProjectPic" alt="Project 1" />
			<h2>Video Name Function</h2>
			<p>Level of content function</p>
		</div>
	);
}

export default ProjectGridImg;
