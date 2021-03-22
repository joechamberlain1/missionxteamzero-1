import React from "react";
import "../css/icons.css";
import progressicon from "../img/project-icons/progress-dark.png";
import studenticon from "../img/project-icons/student-dark.png";
import helpicon from "../img/project-icons/help-dark.png";
import subicon from "../img/project-icons/submissions-dark.png";
import libraryicon from "../img/project-icons/library-light.png";

export const ProIcons = [
  { title: "", path: "/mainDash-progress", icon: <img src={progressicon} alt="progressicon"/>, cName: "layicon1", },
  { title: "", path: "/leftNavLayout2", icon: <img src={studenticon} alt="studenticon"/>, cName: "layicon", },
  { title: "", path: "/mainDash-help", icon: <img src={helpicon} alt="helpicon"/>, cName: "layicon", },
  { title: "", path: "/leftNavLayout2", icon: <img src={subicon} alt="subicon"/>, cName: "layicon", },
  { title: "", path: "/leftNavLayout2", icon: <img src={libraryicon} alt="libraryicon"/>, cName: "layicon", },
];

