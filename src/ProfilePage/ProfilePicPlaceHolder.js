import React from "react";
import "./ProfilePage.css";

// Profile Pic place holder. Should be replaced when backend code is functioning

function ProfilePicPlaceHolder(props) {
	return (
		<img
			className="profile-pic"
			src={props.ProfilePic}
			alt="profileplaceholder"
		/>
	);
}

export default ProfilePicPlaceHolder;
