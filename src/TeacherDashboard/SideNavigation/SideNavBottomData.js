import React from "react";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";

export const SideNavBottomData = [
	{
		title: "Profile",
		path: "/TeacherProfilePage",
		icon: <CgIcons.CgProfile />,
		cName: "BottomIconText",
	},
	{
		title: "Settings",
		// path: "/",
		icon: <FaIcons.FaCog />,
		cName: "BottomIconText",
	},
	{
		title: "Log out",
		// path: "/",
		icon: <FiIcons.FiLogOut />,
		cName: "BottomIconText",
	},
];
