import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideNavStyle.css";
// import StudentProfileGrid from "../../TeacherStudentProfiles/StudentProfileGrid";
import PlaceHolderPic from "../../img/profilepicplaceholder.png";
import { SideNavData } from "./SideNavData";
import { SideNavBottomData } from "./SideNavBottomData";
import SideNavBottom from "./SideNavBottom";
import * as RiIcons from "react-icons/ri";

function SideNav() {
	const [sidebar, setSidebar] = useState(false);

	const showSideBar = () => {
		setSidebar(true);
	};
	const hideSideBar = () => {
		setSidebar(false);
	};

	// Collapsed Sidebar data
	const showCollapsedSideBar = () => {
		return (
			<div className="SideBarCollapsed">
				<div className="ProfilePicPlacementSideBar">
					<img
						src={PlaceHolderPic}
						alt="placeholder"
						style={{ height: "79px", width: "79px", borderRadius: "50%" }}
					/>
				</div>

				<div className="SideBarTopContentCollapsed">
					{SideNavData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>{item.icon}</Link>
							</li>
						);
					})}
				</div>

				<div className="SideBarButtonCollapsed">
					{/* <Link to="#"> */}
					<RiIcons.RiArrowRightSFill
						onClick={showSideBar}
						className="menuArrowsCollapsed"
						style={{ cursor: "pointer" }}
					/>
					{/* </Link> */}
				</div>

				{/* Manually added the collapsed icon so they appear in a collumn */}
				<div className="SideBarBottomCollapsed">
					{SideNavBottomData.map((item, index) => {
						return (
							<li key={index} className={item.BottomIconText}>
								<Link to={item.path}>{item.icon}</Link>
							</li>
						);
					})}
				</div>
			</div>
		);
	};

	// Main Sidebar when it is opened
	const showMainSideBar = () => {
		return (
			<nav className="SideBarMainContainer active">
				<div className="ProfilePicPlacementSideBar">
					<img
						src={PlaceHolderPic}
						alt="placeholder"
						style={{ height: "79px", width: "79px", borderRadius: "50%" }}
					/>
				</div>

				<div className="SideBarTopContent">
					{SideNavData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</div>

				<div className="SideBarButton">
					{/* <Link to="#" className="menuArrows"> */}
					<RiIcons.RiArrowLeftSFill
						onClick={hideSideBar}
						className="menuArrows"
						style={{ cursor: "pointer" }}
					/>
					{/* </Link> */}
				</div>
				<SideNavBottom />
			</nav>
		);
	};

	return <>{sidebar ? showMainSideBar() : showCollapsedSideBar()}</>;
}

export default SideNav;
