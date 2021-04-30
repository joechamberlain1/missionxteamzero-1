import React from "react";
import "./StudentProfileGrid.css";

// Student profiles will be called when entering the Teacher Student Profile section. Props being used specifically for the text and images.
// Can edit the name and profile pics on the actual TeacherStudentProfile.js to accomodate the name and images from backend

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
