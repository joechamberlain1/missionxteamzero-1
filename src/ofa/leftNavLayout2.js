import React from "react";
import "../ofa/css/leftNavLayout2.css";
import { Link } from "react-router-dom";
import { ProIcons } from "./components/icons";
import { SetIcon } from "./components/icons2";
import Tavitar from "./components/tavitar";
import openicon from "../ofa/img/open.png";

function LeftNavL2() {
	return (
		<div className="mainL">
			<div className="leftnavbody">
				<Tavitar />

				{/*left-side menu */}
				{ProIcons.map((item, index) => {
					return (
						<li key={index} className={item.cName}>
							<Link to={item.path}>
								{item.icon}
								<span>{item.title}</span>
							</Link>
						</li>
					);
				})}

				{/* open button */}
				<div className="arrowopen1">
					<Link to="/TeacherStudentProfile">
						<img src={openicon} alt="Open Icon" />
					</Link>
				</div>

				{/*left-side bottom menu*/}
				<div className="bottomicon">
					{SetIcon.map((item, index) => {
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
			</div>
		</div>
	);
}

export default LeftNavL2;
