import React from "react";
// import { NavLink } from "react-router-dom";
import * as ImIcons from "react-icons/im";
import * as Io5Icons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
// import "../../MainFooter/MainFooterStyle.css";

export const SideNavData = [
	{
		title: "Progress Tracker",
		path: "/ProgressTrackerDummy",
		icon: <ImIcons.ImStatsBars />,
		cName: "nav-text",
	},
	{
		title: "Student Profiles",
		path: "/TeacherStudentProfile",
		icon: <Io5Icons.IoSchool />,
		cName: "nav-text",
	},
	{
		title: "Help Requests",
		path: "/HelpRequestDummy",
		icon: <RiIcons.RiQuestionnaireFill />,
		cName: "nav-text",
	},
	{
		title: "Project Submissions",
		path: "/ProjectSubmissionsDummy",
		icon: <AiIcons.AiFillProject />,
		cName: "nav-text",
	},
	{
		title: "Project Library",
		path: "/ProjectLibraryDummy",
		icon: <Io5Icons.IoLibraryOutline />,
		cName: "nav-text",
	},
];
