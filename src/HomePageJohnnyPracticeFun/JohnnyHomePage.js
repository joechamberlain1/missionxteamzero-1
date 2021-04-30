import React from "react";
import MainTopNav from "../MainTopNav/MainTopNav.js";
import MainFooter from "../MainFooter/MainFooter.js";
import "./JohnnyHomePageStyle.css";
// import SignUpButton from "../LogInSignUp/SignUpButton";
import Project01 from "./Images/Projects 01.png";
import StudentCreateIcon from "./StudentsIcons/StudentCreateIcon.js";
import animationIcon from "./StudentsIcons/animationicon.png";
import gamesIcon from "./StudentsIcons/joystick.png";
import robotIcon from "./StudentsIcons/robotic.png";
import AugmentedRealityIcon from "./StudentsIcons/augmentedReality.png";
import TeachingKidsIcon from "./StudentsIcons/TeachingKidsIcon.js";
import idea from "./StudentsIcons/idea.png";
import girlcuttingimage from "./Images/girlcuttingimage.jpg";
import crticalThinking from "./StudentsIcons/criticalThinking.png";
import puzzle from "./Images/puzzling.jpg";
import girlsplaying from "./Images/girlsplaying.jpg";
import teamhands from "./StudentsIcons/teamhands.png";
import Atom from "./StudentsIcons/atom.png";
import laptopgirl from "./Images/girlonlaptop.jpg";
import Section4Content from "./Section4Content.js";
import happyboys from "./Images/happystudents.jpg";
import FormModal from "../LogInSignUp/MissionXModal.js";

// Purposely did it like this, because it was purely for practice purposes and counted as my "4th" page --> Johnny
// Ideally would be better to break it into individual sections similarly to the MainTopNav and MainFooter

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
						<button>Learn More</button>
						<div className="SignUpButtonCSS">
							<button>
								<FormModal signupButton = 'SIGN UP' />
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
						background={girlcuttingimage}
						text="Creativity & Individuality"
						icon={<img src={idea} alt="Idea"></img>}
					/>
					<TeachingKidsIcon
						background={puzzle}
						text="Critical Thinking & Problem Solving"
						icon={<img src={crticalThinking} alt="Critical Thinking"></img>}
					/>
					<TeachingKidsIcon
						background={girlsplaying}
						text="Communication & Collaboration"
						icon={<img src={teamhands} alt="Team"></img>}
					/>
					<TeachingKidsIcon
						background={laptopgirl}
						text="Technology & Future Focus"
						icon={<img src={Atom} alt="Atom"></img>}
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

			{/* Section 4 is suppoes to be a clickable section from the Section3 Buttons If and else statements suppoes to be here */}
			<div className="Section4">
				<h3>Enhance key competencies</h3>
				<p>
					The programe enhances capabilities of students in the 5 Key
					Competencies identified in the New Zealand Curriculum:
				</p>
				<Section4Content
					heading="Thinking"
					text="In particular the programme focused on problem solving, design thinking and computational thinking."
				/>
				<Section4Content
					heading="Discerning Codes"
					text="Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed."
				/>
				<Section4Content
					heading="Self-Management"
					text="Projects and challenges are designed to motivate students to explore and experiment with self-motivation"
				/>
				<Section4Content
					heading="Relationships with peers"
					text="The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas."
				/>
				<Section4Content
					heading="Participation and Collaboration"
					text="The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people"
				/>
			</div>

			<div className="Section5">
				<img src={happyboys} alt="Happy Students"></img>
				<div className="Section5content">
					<h3>What are you waiting for?</h3>
					<h5>Start teaching Digital Technologies today.</h5>
					If you need more infomration, we are happy to answer any questions you
					may have.
					<div className="Content5ButtonsContainer">
						<button>Enquire Now</button>
						<button>
							<FormModal signupButton = 'SIGN UP'/>
						</button>
					</div>
				</div>
			</div>

			<MainFooter />
		</div>
	);
};

export default JohnnyHomePage;
