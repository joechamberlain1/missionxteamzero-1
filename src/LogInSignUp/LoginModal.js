import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import "./SignUp.css";
import students from "../img/LoginSignUp Modal/Students.png";
import teachers from "../img/LoginSignUp Modal/teacher-1.png";
import SignUpToLogIn from "./SignUpToLogIn";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textDecoration: "none",
	},
}));

function LogInModal() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div className="Form">
            <div className="StudentLeft">

                <img src={students} className="FormPic" alt="Students" />
                <p className='FormHeader'>Students</p>
                <div className ='FormLinks'>
				<Link className="LogInLinkON">LOG IN</Link>{" "}
				<Link className="FormLinkModal"><SignUpToLogIn /></Link>
				</div>


                <div className="UserInput">
                    <input placeholder="Email Address"></input>
                    <input placeholder="Password"></input>
                    {/* have added link to the student project library page. User data has not been added yet */}
                </div>
                <Link to="/StudentProjectLib">
                    <button className='registerButton' type="button">LOG IN</button>
                </Link>
            </div>

            <div className="TeacherRight">
                <img src={teachers} className="FormPic" alt="Teacher" />

                <p className='FormHeader'>Teachers</p>
                <div className = 'FormLinks'>
				<Link className="LogInLinkON">LOG IN</Link>{" "}
				<Link className="FormLinkModal"><SignUpToLogIn /></Link>
				</div>
                <div className="UserInput">
                    <input
                        type="email"
                        required
                        placeholder="Email Address"
                    />
                    <input placeholder="Password" />
                </div>
                <Link to="/TeacherProjectsPage">
                    <button className='registerButton' type="button">LOG IN</button>
                </Link>
            </div>		
            </div>
	);

	return (
		<div>
			{/* this is the part that will show on the nav bar */}
			<Link onClick={handleOpen} >LOG IN</Link>
			<Modal open={open} onClose={handleClose} className={classes.modal}>
				{body}
			</Modal>
		</div>
	);
	
	// return <>{sidebar ? showMainSideBar() : showCollapsedSideBar()}</>;
	//test 
}

export default LogInModal;
