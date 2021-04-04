import React from "react";
import "./teacher1.css";

import Teacher2 from "./teacher2.js";

function Teacher1() {
	return (
		<div>
			<div className="divt1">
				<div className="divt2">
					<div className="divt3">
						<div className="col2">
							<div>
								<h4 className="c1">BEGINNER COURSE</h4>
							</div>
							<div>
								<h4 className="c2">EXPORT AS SPREADSHEET</h4>
							</div>
						</div>

						<div className="divt41">
							<div className="divt5">
								<p className="mp1">AIDEN ANDREWS</p>
								<p className="mp2">4/15 Projects Completed</p>
								<Teacher2 />
							</div>
						</div>

						<div className="divt41">
							<div className="divt5">
								<p className="mp1">COURTNEY BRISTOL</p>
								<p className="mp2">1/15 Projects Completed</p>
								<Teacher2 />
							</div>
						</div>

						<div className="divt41">
							<div className="divt5">
								<p className="mp1">NAGINI CORTES</p>
								<p className="mp2">4/15 Projects Completed</p>
								<Teacher2 />
							</div>
						</div>

						<div className="divt41">
							<div className="divt5">
								<p className="mp1">RAWIRI FLETCHER</p>
								<p className="mp2">7/15 Projects Completed</p>
								<Teacher2 />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Teacher1;
