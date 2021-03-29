import React from "react";
import "../ofa/css/teacherpro.css";

import DashboardHeader from "../ofa/dashboard-header";

import Teacherb from "./progress-tracker";
import LeftNavigation from "./left-navigation";

import Tavitar from "../ofa/components/tavitar";
import MainDashboardFooter from "../TeacherDashboard/DashboardFooter";

function DashboardProgress() {
	return (
		<div className="teacherpro-body">
			<DashboardHeader />

			<div className="teacherbody">
				<div className="left-side">
					<div className="leftnav">
						<Tavitar />
					</div>

					<div class="list-group">
						<LeftNavigation />
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

export default DashboardProgress;
