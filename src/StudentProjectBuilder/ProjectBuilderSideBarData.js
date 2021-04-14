import React from "react";
import Objectives from "../img/project-icons/1.png";
import Instructions from "../img/project-icons/2.png";
import VideoTutorial from "../img/project-icons/3.png";
import MakeProject from "../img/project-icons/4.png";
import SubmitProject from "../img/project-icons/5.png";
import BonusChallenge from "../img/project-icons/6.png";
import TakeTheQuiz from "../img/project-icons/7.png";

export const ProjectSideBarData = [
	{
		title: "Objectives",
		path: "/ObjectivesProjectBuilder",
		icon: <img src={Objectives} alt="objectives" />,
		cName: "nav-text",
	},
	{
		title: "Instructions",
		path: "/InstructionsDummy",
		icon: <img src={Instructions} alt="Instructions" />,
		cName: "nav-text",
	},
	{
		title: "Video Tutorial",
		path: "/VideoTutorialDummy",
		icon: <img src={VideoTutorial} alt="VideoTutorial" />,
		cName: "nav-text",
	},
	{
		title: "Make Project",
		path: "/MakeProjectDummy",
		icon: <img src={MakeProject} alt="MakeProject" />,
		cName: "nav-text",
	},
	{
		title: "Submit Project",
		path: "/SubmitProjectDummy",
		icon: <img src={SubmitProject} alt="SubmitProject" />,
		cName: "nav-text",
	},
	{
		title: "Bonus Challenge",
		path: "/BonusChallengeDummy",
		icon: <img src={BonusChallenge} alt="BonusChallenge" />,
		cName: "nav-text",
	},
	{
		title: "Take the Quiz",
		path: "/TakeTheQuizDummy",
		icon: <img src={TakeTheQuiz} alt="TakeTheQuiz" />,
		cName: "nav-text",
	},
];
