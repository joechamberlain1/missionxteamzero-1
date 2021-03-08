import React from "react";
import * as GiIcons from "react-icons/gi";
import * as Io5Icons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";

export const SideNavData = [
  {
    title: "Progress Tracker",
    path: "/teacherpro",
    icon: <GiIcons.GiProgression />,
    cName: "nav-text",
  },
  {
    title: "Student Profiles",
    path: "/TeacherStudentProfilePart1",
    icon: <Io5Icons.IoSchool />,
    cName: "nav-text",
  },
  {
    title: "Help Requests",
    path: "/",
    icon: <RiIcons.RiQuestionnaireFill />,
    cName: "nav-text",
  },
  {
    title: "Project Submissions",
    path: "/",
    icon: <AiIcons.AiFillProject />,
    cName: "nav-text",
  },
  {
    title: "Project Library",
    path: "/",
    icon: <Io5Icons.IoLibraryOutline />,
    cName: "nav-text",
  },
];
