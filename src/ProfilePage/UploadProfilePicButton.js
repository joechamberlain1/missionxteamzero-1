import React from "react";
import "./ProfilePage.css";

function UploadProfilePicButton() {
	return (
		<form
			method="POST"
			action="http://localhost:8080/api/user/profilePic"
			enctype="multipart/form-data"
		>
			<input type="file" name="profilePic" className="profile-buttons"></input>
			<br></br>
			<button type="submit"> Upload photo</button>
		</form>
	);
}
export default UploadProfilePicButton;
