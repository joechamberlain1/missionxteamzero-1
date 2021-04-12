import React from "react";
import { NavLink } from "react-router-dom";
import * as ImIcons from "react-icons/im";
import * as Io5Icons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import "../../MainFooter/MainFooterStyle.css";

export const SideNavData = [
	{
		title: "Progress Tracker",
		// path: "/mainDash-progress",
		icon: <ImIcons.ImStatsBars />,
		cName: "nav-text",
	},
	{
		title: "Student Profiles",
		path: <NavLink to="/TeacherStudentProfile" activeClassName="haha" />,
		icon: <Io5Icons.IoSchool />,
		cName: "nav-text",
	},
	{
		title: "Help Requests",
		// path: "/mainDash-help",
		icon: <RiIcons.RiQuestionnaireFill />,
		cName: "nav-text",
	},
	{
		title: "Project Submissions",
		// path: "/",
		icon: <AiIcons.AiFillProject />,
		cName: "nav-text",
	},
	{
		title: "Project Library",
		// path: "/",
		icon: <Io5Icons.IoLibraryOutline />,
		cName: "nav-text",
	},
];
