// import React from "react";
// import Dialog from "@material-ui/core/Dialog";
// import "./SignUp.css";
// import students from "../img/LoginSignUp Modal/Students.png";
// import teachers from "../img/LoginSignUp Modal/teacher-1.png";
// import { Link } from "react-router-dom";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { useTheme } from "@material-ui/core/styles";
// import { MdClose } from 'react-icons/md'

// function LogInModal() {
// 	const [open, setOpen] = React.useState(false);
// 	const theme = useTheme();
// 	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

// 	const handleClickOpen = () => {
// 		setOpen(true);
// 	};

// 	const handleClose = (value) => {
// 		setOpen(false);
		
// 	  };

// 	return (
// 			<div onClick={handleClickOpen} className="a2">
// 				Login
// 				<Dialog
// 					fullScreen={fullScreen}
// 					open={open}
// 					onClose={handleClose}
// 					aria-labelledby="form-dialog-title"
// 				>
					// <div className="Form">
					// 	{/* <h1>LOG IN</h1>    */}
					// 	<div className="StudentLogIn">
							
					// 		<img src={students} className="FormPic" alt="Students" />
					// 		<p className='FormHeader'>Students</p>
					// 		{/* these a tags will be changed to Link once we have added in the newer pages */}
					// 		<Link className="LogInLinkON">LOG IN</Link>{" "}
					// 		<Link className="FormLinks">SIGN UP</Link>
					// 		<div className="UserInput">
					// 			<input placeholder="Email Address"></input>
					// 			<input placeholder="Password"></input>
					// 			{/* have added link to the student project library page. User data has not been added yet */}
					// 		</div>
					// 		<Link to="/StudentProjectLib">
					// 		<button className = 'registerButton' type="button" value="Register" >LOG IN</button>
					// 		</Link>
					// 	</div>

					// 	<div className="TeacherLogIn">
					// 		<img src={teachers} className="FormPic" alt="Teacher" />
							
					// 		<p className='FormHeader'>Teachers</p>
					// 		{/* these a tags will be changed to Link once we have added in the newer pages */}
					// 		<Link className="LogInLinkON">LOG IN</Link>{" "}
					// 		<Link to="/SignUp" className="FormLinks">SIGN UP</Link>
					// 		<div className="UserInput">
					// 			<input
					// 				type="email"
					// 				required
					// 				placeholder="Email Address"
					// 			></input>
					// 			<input placeholder="Password"></input>
					// 		</div>
					// 		{/* Will be changed to teachers page once the page has been made */}
					// 		<Link to="/teacherpro">
					// 		<button className = 'registerButton' type="button" value="Register" >LOG IN</button>
					// 		</Link>
					// 	</div>
					// </div>
// 				</Dialog>
// 			</div>
// 	);
// }

// export default LogInModal;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import teachers from "../img/LoginSignUp Modal/teacher-1.png";
import { Link } from "react-router-dom";
import students from "../img/LoginSignUp Modal/Students.png";
import "./SignUp.css";




const useStyles = makeStyles((theme) => ({

  	paper: {

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		padding: theme.spacing(2, 4, 3),
		position: 'absolute'
  },

  modal:{

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  
}
}));

function LogInModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const body = (
    <div className={classes.paper}>
      <div className="Form">
						{/* <h1>LOG IN</h1>    */}
						<div className="StudentLogIn">
							
							<img src={students} className="FormPic" alt="Students" />
							<p className='FormHeader'>Students</p>
							{/* these a tags will be changed to Link once we have added in the newer pages */}
							<Link className="LogInLinkON">LOG IN</Link>{" "}
							<Link className="FormLinks">SIGN UP</Link>
							<div className="UserInput">
								<input placeholder="Email Address"></input>
								<input placeholder="Password"></input>
								{/* have added link to the student project library page. User data has not been added yet */}
							</div>
							<Link to="/StudentProjectLib">
							<button className = 'registerButton' type="button" value="Register" >LOG IN</button>
							</Link>
						</div>

						<div className="TeacherLogIn">
							<img src={teachers} className="FormPic" alt="Teacher" />
							
							<p className='FormHeader'>Teachers</p>
							{/* these a tags will be changed to Link once we have added in the newer pages */}
							<Link className="LogInLinkON">LOG IN</Link>{" "}
							<Link to="/SignUp" className="FormLinks">SIGN UP</Link>
							<div className="UserInput">
								<input
									type="email"
									required
									placeholder="Email Address"
								></input>
								<input placeholder="Password"></input>
							</div>
							{/* Will be changed to teachers page once the page has been made */}
							<Link to="/teacherpro">
							<button className = 'registerButton' type="button" value="Register" >LOG IN</button>
							</Link>
						</div>
					</div>
      
    </div>
  );

  return (
	   
    <div>
      <Link onClick={handleOpen} className="a2">
			Login
		</Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
		className = {classes.modal}
      >
        {body}
      </Modal>
    </div>
  );
}


export default LogInModal