import React from "react";
import MainFooter from "../../MainFooter/Footer.js";
import Nav from "../../Components/nav.js";
import ProfilePic from "../../img/profilepicplaceholder.png";
import "../ProfilePage.css";
import TeacherProfileBottomButtons from "./TeacherProfileBottomButtons.js";

function TeacherProfilePage() {
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
							<button>Settings</button>
						</div>
					</div>
					<div className="main-profile-details">
						<h1 style={{ textAlign: "center" }}>Profile Name Function</h1>
						<div className="details-container">
							<div className="requiredDetails">School</div>
							<div className="returnedFunction">Function for school name</div>
						</div>
						<div className="details-container">
							<div className="requiredDetails">Courses Purchased</div>
							<div className="returnedFunction">
								Function for Course difficulty
							</div>
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
				<TeacherProfileBottomButtons />
			</div>
			<MainFooter />
		</div>
	);
}

export default TeacherProfilePage;
