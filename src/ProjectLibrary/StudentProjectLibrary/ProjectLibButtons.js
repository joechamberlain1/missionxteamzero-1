// import React, {useState, useEffect} from "react";
// import "./StudentProjectLib.css";
// import { Button, ButtonGroup } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
// // import { StudentProjectContent } from "./StudentProjectContent";

// // in case i want to add some styles to the buttons for the top part of the page using material UI
// const useStyles = makeStyles((theme) => ({
// 	paper: {
// 		boxShadow: "none",
// 		border: "1px solid grey",
// 		color: "white",
// 		height: 20,
// 	},
// }));

// function LibButton() {
//     const [projectData, setProjectData] = useState([]);


// 	const getBeginnerData = () => {
// 		const requestURL1 = 'http://localhost:8080/api/project/getbeginnerData';
	  
// 		// calls the API with the url 'requestURL2'
// 		// once we get the response then do something with it
// 		// * CONSUMER of the promise returned by the Fetch API
// 		fetch(requestURL1)
// 		  .then((response) => response.json())
// 		  .then((data) => {
// 			  setProjectData(data)
// 			  console.log(data)
// 			});
// 	  };



// 	const classes = useStyles();
// 	return (
// 		<div className="StudentLibButtonContainer">
// 			<div>
// 				<ButtonGroup
// 					size="small"
// 					variant="text"
// 					className={classes.paper}
// 				>

// 					{/* color ={beginner ? 'black' : 'primary'}  */}
// 					<Button id='content' onClick={()=> getBeginnerData()}>BEGINNER</Button>
// 					<Button>INTERMEDIATE</Button>
// 					<Button>ADVANCED</Button>
// 				</ButtonGroup>
// 			</div>

// 			<div>
// 				Show
// 				<ButtonGroup
// 					size="small"
// 					variant="contained"
// 					color="primary"
// 					aria-label="text primary button group"
// 				>
// 					<Button className={classes.paper}>25</Button>
// 					<Button className={classes.paper}>50</Button>
// 					<Button className={classes.paper}>100</Button>
// 				</ButtonGroup>
// 			</div>
// 		</div>
// 	);
// }

// export default LibButton;


