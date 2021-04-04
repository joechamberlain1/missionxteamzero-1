import React from "react";
import MainTopNav from "../../MainTopNav/MainTopNav.js";
import Hsec1 from "./hsec1";
import Hsec2 from "./hsec2";
import Hsec3 from "./hsec3";
import Hsec5 from "./hsec5";
import Hsec6 from "./hsec6";

import MainFooter from "../../MainFooter/MainFooter.js";

const HomePage = () => {
	return (
		<div>
			<MainTopNav />
			<Hsec1 />
			<Hsec2 />
			<Hsec3 />
			<Hsec5 />
			<Hsec6 />
			<MainFooter />
		</div>
	);
};

export default HomePage;
