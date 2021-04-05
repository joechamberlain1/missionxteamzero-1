import React from "react";
import MainTopNav from "../MainTopNav/MainTopNav.js";
import MainFooter from "../MainFooter/MainFooter.js";
import "./JohnnyHomePageStyle.css";
import SignUpButton from "../LogInSignUp/SignUpButton";
import Project01 from "./Images/Projects 01.png";
import StudentCreateIcon from "./StudentsIcons/StudentCreateIcon.js";
import animationIcon from "./StudentsIcons/animationicon.png";
import gamesIcon from "./StudentsIcons/joystick.png";
import robotIcon from "./StudentsIcons/robotic.png";
import AugmentedRealityIcon from "./StudentsIcons/augmentedReality.png";
import TeachingKidsIcon from "./StudentsIcons/TeachingKidsIcon.js";
import idea from "./StudentsIcons/idea.png";
import "./Images/girlcuttingimage.jpg";

const JohnnyHomePage = () => {
	return (
		<div>
			<MainTopNav />
			<div className="Section1">
				<div className="Content1">
					<h1>
						Prepare young minds for a better{" "}
						<span style={{ color: "#42C0F6" }}>future</span>
					</h1>
					Let us help you advance students in Digital Technologies and other
					learning areas with our project-based learning programme.
					<div className="Content1ButtonsContainer">
						<button>LEARN MORE</button>
						<div className="Content1ButtonsSignUpButton">
							<button>
								<SignUpButton />
							</button>
							*Basic subscription includes the first 15 project free of charge.
						</div>
					</div>
				</div>
			</div>

			<div className="Section2">
				<div className="Section2LeftContent">
					<h1>What we offer</h1>
					The Creative Problem Solving programme is series of digital creation
					projects aimed to encourage self-motivation and student agency,
					designed by New Zealand’s leading IT industry experts and schools.
					<h1>What will students create?</h1>
					<div className="Section2LeftStudentCreate">
						<StudentCreateIcon
							text="Animation"
							image={<img src={animationIcon} alt="Animation Icon"></img>}
						/>
						<StudentCreateIcon
							text="Games"
							image={<img src={gamesIcon} alt="Games Icon"></img>}
						/>
						<StudentCreateIcon
							text="Chatbots"
							image={<img src={robotIcon} alt="robot Icon"></img>}
						/>
						<StudentCreateIcon
							text="Augmented Reality"
							image={
								<img
									src={AugmentedRealityIcon}
									alt="AugmentedReality Icon"
								></img>
							}
						/>
					</div>
				</div>

				<div className="Section2RightContent">
					<img src={Project01} alt="Project01"></img>
				</div>
			</div>

			<div className="Section3">
				<h3>
					Teaching kids programming and digital skills is MORE than just writing
					code.
				</h3>
				<div className="Section3Icons">
					<TeachingKidsIcon
						background={"./Images/girlcuttingimage.jpg"}
						text="Creativity & Individuality"
						icon={<img src={idea} alt="Idea"></img>}
					/>
				</div>
				<h3>How our programme helps teachers and schools</h3>
				<div className="Section3Buttons">
					<button>Learning Pathways</button>
					<button>Digital Technologies</button>
					<button className="KeyCompetenciesButton">Key Competencies</button>
					<button>IR4.0</button>
				</div>
			</div>

			<MainFooter />
		</div>
	);
};

export default JohnnyHomePage;
