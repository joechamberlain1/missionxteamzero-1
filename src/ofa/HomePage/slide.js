import React from "react";

import Carousel from "react-elastic-carousel";
import Item from "../Item";
import "./slide.css";
import Project1 from "../../img/project1.png";
import Project2 from "../../img/project2.png";
import Project3 from "../../img/project3.png";
import Project4 from "../../img/project4.png";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

function Slide1() {
	return (
		<div className="App1">
			<Carousel breakPoints={breakPoints}>
				<Item>
					<img src={Project1} className="project1" alt="Project1" />
				</Item>
				<Item>
					<img src={Project2} className="project2" alt="Project2" />
				</Item>
				<Item>
					<img src={Project3} className="project3" alt="Project3" />
				</Item>
				<Item>
					<img src={Project4} className="project4" alt="Project4" />
				</Item>
			</Carousel>
		</div>
	);
}

export default Slide1;
