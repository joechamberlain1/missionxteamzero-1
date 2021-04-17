import React, { useState, useEffect } from "react";
import MainFooter from "../../MainFooter/MainFooter.js";
import MainTopNav from "../../MainTopNav/MainTopNav.js";
import ProfilePic from "../../img/profilepicplaceholder.png";
import ProfilePicPlaceHolder from "../ProfilePicPlaceHolder.js";
import "../ProfilePage.css";
import TeacherProfileBottomButtons from "./TeacherProfileBottomButtons.js";
import ProfileDetails from "../ProfileDetails.js";

function TeacherProfilePage() {
	const [userData, setUserData] = useState("");

	// This is the above line WITHOUT using react.
	// const test2 = "";
	// function setTest2(foo) {
	// 	test2 = foo;
	// }

	function CallAPI() {
		const requestURL1 =
			"http://localhost:8080/api/TeacherProfilePage/getAllData/userProfile";
		fetch(requestURL1)
			.then((response) => response.json())
			.then((data) => setUserData(data));
	}

	useEffect(() => {
		if (!userData) {
			CallAPI();
		}
	});

	return (
		<div>
			<MainTopNav />
			<div className="profile-background">
				<div className="profile-container">
					<div className="main-profile-left">
						<ProfilePicPlaceHolder
							ProfilePic={userData ? userData[0].ProfilePic : ProfilePic}
						/>
						<div className="profile-buttons">
							<button>Edit profile</button>
							<button>Change Photo</button>
							<button>Settings</button>
						</div>
					</div>
					<div className="main-profile-details">
						<h1 style={{ textAlign: "center" }}>
							{userData
								? userData[0].FirstName + " " + userData[0].LastName
								: "Waiting for API to load"}
						</h1>

						<ProfileDetails
							reqDetails="School"
							returnedFunction={
								userData ? userData[0].School : "Waiting for API to load"
							}
						/>
						{/* <button onClick={() => handleClick()}> Button to call API</button> */}
						<ProfileDetails
							reqDetails="Courses Purchased"
							// returnedFunction={
							// 	test
							// 		? test[0].Course + " " + test[0].SubjectMatter1
							// 		:  test[0].Course = "Beginner"
							// 		   test[0].SubjectMatter1 = "Computer Science"
							// 		   Add these two: "Beginner" + "Computer Science" = "{Beginner}{Computer Science}"
							// 		  "I do not exist"
							// }
						/>

						<ProfileDetails
							reqDetails="Date Of Birth"
							returnedFunction={
								userData ? userData[0].DateOfBirth : "Waiting for API to load"
							}
						/>

						<ProfileDetails
							reqDetails="Contact No"
							returnedFunction={
								userData ? userData[0].ContactNumber : "Waiting for API to load"
							}
						/>
						<ProfileDetails
							reqDetails="Email Address"
							returnedFunction={
								userData ? userData[0].Email : "Waiting for API to load"
							}
						/>
					</div>
				</div>
				<TeacherProfileBottomButtons />
			</div>
			<MainFooter />
		</div>
	);
}

export default TeacherProfilePage;
