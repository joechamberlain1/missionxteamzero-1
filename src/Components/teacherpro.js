import React from "react";
import "../CSS/teacherpro.css";

import TopNav2 from "../TeacherDashboard/TopNavPart2";

import Teacherb from "./teacher1.js";
import TeacherLNav from "./TeacherLNav";
import Tavitar from "./tavitar";
import MainDashboardFooter from "../TeacherDashboard/DashboardFooter";

function Teacherpro() {
	return (
		<div className="teacherpro-body">
			<TopNav2 />

			<div className="teacherbody">
				<div className="left-side">
					<div className="leftnav">
						<Tavitar />
					</div>

					<div class="list-group">
						<TeacherLNav />
					</div>
				</div>

				<div className="rightSide-Body">
					<Teacherb />
				</div>
			</div>
			<MainDashboardFooter />
		</div>
	);
}

export default Teacherpro;
