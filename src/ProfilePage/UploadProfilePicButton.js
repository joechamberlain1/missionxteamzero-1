import React, { useState } from "react";
import "./ProfilePage.css";

function UploadProfilePicButton() {
	const [fileData, setFileData] = useState();

	const fileChangeHandler = (e) => {
		setFileData(e.target.files[0]);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		// Handle File Data from the state Before Sending
		const data = new FormData();

		data.append("image", fileData);

		fetch("http://localhost:8080/profilePic", {
			method: "POST",
			body: data,
		})
			.then((result) => {
				console.log("File Sent Successful");
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<form onSubmit={onSubmitHandler}>
			{/* <input type="file" onChange={fileChangeHandler} /> */}
			<button type="file" onChange={fileChangeHandler}>
				Change Photo
			</button>
		</form>
	);
}
export default UploadProfilePicButton;
