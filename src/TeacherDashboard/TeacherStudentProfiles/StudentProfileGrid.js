import React from "react";
import "./StudentProfileGrid.css";

function StudentProfileGrid(props) {
	return (
		<div className="MainReusableSmallContainer">
			<img
				className="student-profile-pic"
				alt="Student Profile Pic"
				src={props.StudentImage}
			></img>
			<h5>{props.StudentName}</h5>
		</div>
	);
}

export default StudentProfileGrid;
