import React from "react";
import StarIcon from "../img/staricon.png";
import "./JohnnyHomePageStyle.css";

const Section4Content = (props) => {
	return (
		<div className="Section4Content">
			<img src={StarIcon} alt="starIcon"></img>
			<div className="ContentDescription">
				<h3>{props.heading}</h3>
				{props.text}
			</div>
		</div>
	);
};

export default Section4Content;
