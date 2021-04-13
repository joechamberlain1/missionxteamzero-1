import React from "react";
import MainTopNav from "../../MainTopNav/MainTopNav.js";
import "./StudentProjectLib.css";
import LibButton from "./ProjectLibButtons.js";
import ProjectSideBar from "./ProjectGallerySideBar";
import MainFooter from "../../MainFooter/MainFooter";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LibraryPicture from "./ProjectLibraryPicture.js";

const useStyles = makeStyles((theme) => ({
	buttonStyles: {
		display: "flex",
		float: "right",
		margin: 50,
		boxShadow: "none",
		border: "1px solid",
		backgroundColor: "#E5AB2C",
		color: "white",

		"&:hover": {
			backgroundColor: "#E5AB2C",
			boxShadow: "none",
		},
	},
}));

function StudentProjectLib() {
	const classes = useStyles();

	return (
		<div className="StudentProjectLibrary">
			<MainTopNav />
			<div className="MainPage">
				<div className="ProjectSideBar">
					{/*sidebar container */}
					<div>
						<ProjectSideBar />
					</div>
				</div>
				<div className="ProjectContainer">
					<div className="ProjectLibText">
						<h1>Projects</h1>
						<p>
							Welcome to the project library. You can use filters on the right
							to help you search for specific projects.
						</p>

						<LibButton />
					</div>
					<div>
						<LibraryPicture />
					</div>
					<div>
						<Button
							onClick={scrollToTop}
							className={classes.buttonStyles}
							variant="contained"
							size="small"
						>
							Back to the top
						</Button>
					</div>
				</div>
			</div>

			<MainFooter />
		</div>
	);
}

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

export default StudentProjectLib;
