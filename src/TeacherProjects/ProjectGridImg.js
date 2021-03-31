import React from "react";
import project1 from "../img/project-icons/Projectvid01.png";
import "./TeacherProjectPageStyle.css";

function ProjectGridImg() {
	return (
		<div className="ProjectGridImg">
			<img src={project1} alt="Project" />
			<h2>Video Name Function</h2>
			Level of content function
		</div>
	);
}

export default ProjectGridImg;
