import React from "react";
import MainFooter from "../../MainFooter/MainFooter.js";
import MainTopNav from "../../MainTopNav/MainTopNav.js";
import ProfilePic from "../../img/profilepicplaceholder.png";
import ProfilePicPlaceHolder from "../ProfilePicPlaceHolder.js";
import "../ProfilePage.css";
import TeacherProfileBottomButtons from "./TeacherProfileBottomButtons.js";
import ProfileDetails from "../ProfileDetails.js";

function TeacherProfilePage() {
	let test = null;

	function handleClick() {
		console.log("hello");
		const requestURL1 = "http://localhost:8080/teamzeromissionreadybackend";
		fetch(requestURL1)
			.then((response) => response.json())
			.then((data) => updateTest(data));
		// console.log(test.Course);
	}

	function updateTest(data) {
		test = data;
		console.log(test[0].Course);
	}

	return (
		<div>
			<MainTopNav />
			<div className="profile-background">
				<div className="profile-container">
					<div className="main-profile-left">
						<ProfilePicPlaceHolder ProfilePic={ProfilePic} />
						<div className="profile-buttons">
							<button>Edit profile</button>
							<button>Change Photo</button>
							<button>Settings</button>
						</div>
					</div>
					<div className="main-profile-details">
						<h1 style={{ textAlign: "center" }}>Profile Name Function</h1>

						<ProfileDetails
							reqDetails="School"
							returnedFunction={
								<button onClick={() => handleClick()}> for school name</button>
							}
						/>
						<ProfileDetails
							reqDetails="Courses Purchased"
							returnedFunction={test !== null ? test[0].Course : "Course"}
						/>

						<ProfileDetails
							reqDetails="Date Of Birth"
							returnedFunction={
								test !== null ? test[0].Course : "Date of Birth"
							}
						/>

						<ProfileDetails
							reqDetails="Contact No"
							returnedFunction="Function for Contact No"
						/>
						<ProfileDetails
							reqDetails="Email Address"
							returnedFunction="Function for Email"
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
