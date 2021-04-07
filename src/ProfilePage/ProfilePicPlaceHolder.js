import React from "react";
import "./ProfilePage.css";

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
