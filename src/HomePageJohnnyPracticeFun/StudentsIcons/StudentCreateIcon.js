import React from "react";
import "../JohnnyHomePageStyle.css";

const StudentCreateIcon = (props) => {
	return (
		<div className="IconContainer">
			{props.image}
			{props.text}
		</div>
	);
};

export default StudentCreateIcon;
