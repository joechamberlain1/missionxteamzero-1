import React from "react";
import MainFooter from "../MainFooter/MainFooter.js";
import Nav from "../Components/nav.js";
import ProfilePic from "../img/profilepicplaceholder.png";
import "./ProfilePage.css";
import TeacherProjectBottomButtons from "../TeacherProjects/TeacherProjectBottomButtons";

function ProfilePage() {
	return (
		<div>
			<Nav />
			<div className="profile-background">
				<div className="profile-container">
					<div className="main-profile-left">
						<img
							className="profile-pic"
							src={ProfilePic}
							alt="profileplaceholder"
						/>
						<div className="profile-buttons">
							<button>Edit profile</button>
							<button>Change Photo</button>
						</div>
					</div>
					<div className="main-profile-details">
						<h1 style={{ textAlign: "center" }}>Profile Name Function</h1>
						<div className="details-container">
							<div className="requiredDetails">School</div>
							<div className="returnedFunction">Function for school name</div>
						</div>
						<div className="details-container">
							<div className="requiredDetails">Teacher</div>
							<div className="returnedFunction">Function for Teacher name</div>
						</div>
						<div className="details-container">
							<div className="requiredDetails">Course</div>
							<div className="returnedFunction">Function for Course name</div>
						</div>
						<div className="details-container">
							<div className="requiredDetails">Date of Birth</div>
							<div className="returnedFunction">Function for DOB</div>
						</div>
						<div className="details-container">
							<div className="requiredDetails">Contact No</div>
							<div className="returnedFunction">Function for Contact No</div>
						</div>
						<div className="details-container">
							<div className="requiredDetails">Email Address</div>
							<div className="returnedFunction">Function for Email</div>
						</div>
					</div>
				</div>
				<TeacherProjectBottomButtons />
			</div>
			<MainFooter />
		</div>
	);
}

export default ProfilePage;
