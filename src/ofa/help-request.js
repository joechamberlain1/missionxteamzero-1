import React from "react";
import Avatar from "@material-ui/core/Avatar";

import "../ofa/css/helpT.css";

import Checkbox from "./checkbox.js";
import AIDEN from "../img/AIDEN.png";
import RAWIRI from "../img/RAWIRI.png";
import NEVEAH from "../img/NEVEAH.png";
import JAVIER from "../img/JAVIER.png";
import TOKIO from "../img/TOKIO.png";

function Helpt() {
	return (
		<div>
			<div className="divt1">
				<div className="divt2">
					<div className="divt3">
						<div className="col2">
							<div>
								<h4 className="c1">HELP REQUESTS</h4>
							</div>
							<div className="col2">
								<h4 className="c2">REPLY</h4>
								<h4 className="c2">MARK AS DONE</h4>
							</div>

							<div className="divt4">
								<div className="divt51">
									<Checkbox />
									<Avatar alt="Aiden" src={AIDEN} />
									<p className="mp1">AIDEN needs help with his project.</p>
									<p className="mp3">TUE 28 April 2020</p>
								</div>
							</div>

							<div className="divt4">
								<div className="divt51">
									<Checkbox />
									<Avatar alt="Rawiri" src={RAWIRI} />
									<p className="mp1">RAWIRI needs help with his project.</p>
									<p className="mp3">TUE 28 April 2020</p>
								</div>
							</div>

							<div className="divt4">
								<div className="divt51">
									<Checkbox />
									<Avatar alt="Neveah" src={NEVEAH} />
									<p className="mp1">NEVEAH needs help with his project.</p>
									<p className="mp3">Mon 27 April 2020</p>
								</div>
							</div>

							<div className="divt4">
								<div className="divt51">
									<Checkbox />
									<Avatar alt="Javier" src={JAVIER} />
									<p className="mp1">JAVIER needs help with his project.</p>
									<p className="mp3">MON 27 April 2020</p>
								</div>
							</div>

							<div className="divt4">
								<div className="divt51">
									<Checkbox />
									<Avatar alt="Tokio" src={TOKIO} />
									<p className="mp1">TOKIO needs help with his project.</p>
									<p className="mp3">MON 27 April 2020</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Helpt;
