import React from "react";
import "./ProfilePage.css";

// Details for the required information will change upon backend call

const ProfileDetails = (props) => {
	return (
		<div className="details-container">
			<div className="requiredDetails">{props.reqDetails}</div>
			<div className="returnedFunction">{props.returnedFunction}</div>
		</div>
	);
};

export default ProfileDetails;
