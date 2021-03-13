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
    path: "/",
    icon: <img src={Objectives} />,
    cName: "nav-text",
  },
  {
    title: "Instructions",
    path: "/",
    icon: <img src={Instructions} />,
    cName: "nav-text",
  },
  {
    title: "Video Tutorial",
    path: "/",
    icon: <img src={VideoTutorial}  />,
    cName: "nav-text",
  },
  {
    title: "Make Project",
    path: "/",
    icon: <img src={MakeProject}  />,
    cName: "nav-text",
  },
  {
    title: "Submit Project",
    path: "/",
    icon: <img src={SubmitProject}  />,
    cName: "nav-text",
  },
  {
    title: "Bonus Challenge",
    path: "/",
    icon: <img src={BonusChallenge}  />,
    cName: "nav-text",
  },
  {
    title: "Take the Quiz",
    path: "/",
    icon: <img src={TakeTheQuiz}  />,
    cName: "nav-text",
  },
];
