import React from "react";
import "./StudentProjectLib.css";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// in case i want to add some styles to the buttons for the top part of the page using material UI
const useStyles = makeStyles((theme) => ({
	paper: {
		// position: "static",
		boxShadow: "none",
		border: "1px solid",
		color: "black",
		// fontFamily: "Nunito",
		height: 20,

		// width: 170,
		// '&:hover': {
		// boxShadow: 'none',
		//   },
	},
}));

// changes the button to show which selection is highlighted
function LibButton() {
	const classes = useStyles();
	return (
		<div className="StudentLibButtonContainer">
			<div className="StudentLibLeftButtonContainer">
				<ButtonGroup
					size="small"
					variant="text"
					color="primary"
					aria-label="text primary button group"
				>
					<Button className={classes.paper}>BEGINNER</Button>
					<Button className={classes.paper}>INTERMEDIATE</Button>
					<Button className={classes.paper}>ADVANCED</Button>
				</ButtonGroup>
			</div>

			<div className="StudentLibRightButtonContainer">
				Show
				<ButtonGroup
					size="small"
					variant="text"
					color="primary"
					aria-label="text primary button group"
				>
					<Button className={classes.paper}>25</Button>
					<Button className={classes.paper}>50</Button>
					<Button className={classes.paper}>100</Button>
				</ButtonGroup>
			</div>
		</div>
	);
}

export default LibButton;
