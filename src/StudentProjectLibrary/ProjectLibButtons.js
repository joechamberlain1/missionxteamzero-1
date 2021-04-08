import React, {useState} from "react";
import "./StudentProjectLib.css";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { StudentProjectContent } from "./StudentProjectContent";

// in case i want to add some styles to the buttons for the top part of the page using material UI
const useStyles = makeStyles((theme) => ({
	paper: {
		boxShadow: "none",
		border: "1px solid grey",
		color: "white",
		height: 20,
	},
}));

//trying to make a function to filter when a different 
// const filterFunction= () => {
	
// 	return StudentProjectContent ? StudentProjectContent.Difficulty !== 'BEGINNER|Animation': 'nothing'
// };

// console.log(filterFunction())

// changes the button to show which selection is highlighted
function LibButton() {


const [beginner, setBeginner] = useState(true);

  const handleClickOne = () => {
    setBeginner(!beginner);
  };
  const [intermediate, setIntermediate] = useState(true);

  const handleClickTwo = () => {
    setIntermediate(!intermediate);
  };
  const [advanced, setAdvanced] = useState(true);

  const handleClickThree = () => {
    setAdvanced(!advanced);
  };
	const classes = useStyles();
	return (
		<div className="StudentLibButtonContainer">
			<div>
				<ButtonGroup
					size="small"
					variant="text"
					className={classes.paper}
				>
					<Button color ={beginner ? 'black' : 'primary'} onClick={handleClickOne}>BEGINNER</Button>
					<Button color ={intermediate ? 'black' : 'primary'} onClick={handleClickTwo}>INTERMEDIATE</Button>
					<Button color ={advanced ? 'black' : 'primary'} onClick={handleClickThree}>ADVANCED</Button>
				</ButtonGroup>
			</div>

			<div>
				Show
				<ButtonGroup
					size="small"
					variant="contained"
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


