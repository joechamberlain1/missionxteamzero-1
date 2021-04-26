import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import "./SignUp.css";
import students from "../img/LoginSignUp Modal/Students.png";
import teachers from "../img/LoginSignUp Modal/teacher-1.png";
import SignUpTeacher from "./SignUpTeachers";
import SignUpStudent from "./SignUpStudent";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textDecoration: "none",
	},
}));

function FormModal() {
	const classes = useStyles();

	const [login, setLogin] = useState(false); //sets the login state
	const [signup, setSignup] = useState(false); //sets the signup state

	const openLogin = () => {
		setLogin(true);
		//opens the login used for the nav bar
	};

	const closeLogin = () => {
		setLogin(false);
		//closes login used clicking away
	};

	const openSignup = () => {
		setSignup(true);
		//opens sign up used for the nav bar
	};

	const closeSignup = () => {
		setSignup(false);
		//closes signup used for clicking away
	};

	const OpenLogCloseSign = () => {
		setLogin(true);
		setSignup(false);
		//closes signup and opens login, used for internal links
	};

	const OpenSignCloseLog = () => {
		setLogin(false);
		setSignup(true);
	};

	const LoginSubmit = () => {
		const requestURL1 = "http://localhost:8080/api/user/login";
		const FullName = document.getElementById("FullName").value;
		const Password = document.getElementById("Password").value;
		const Email = document.getElementById("Email").value;
		const formData = {
			FullName: FullName,
			Password: Password,
			Email: Email,
		};
		console.log(formData);

		fetch(requestURL1, {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				Accept: "*",
				"Content-Type": "application/json",
			},
		});
	};

	const body = (
		<div className="Form">
			<div className="StudentLeft">
				<img src={students} className="FormPic" alt="Students" />
				<p className="FormHeader">Students</p>
				<div className="FormLinks">
					<Link className="LogInLinkON">LOG IN</Link>
					<Link className="FormLinkModal" onClick={OpenSignCloseLog}>
						SIGN UP
					</Link>
				</div>

				<div className="UserInput">
					<input placeholder="Email Address"></input>
					<input placeholder="Password"></input>
					{/* have added link to the student project library page. User data has not been added yet */}
				</div>

				<button
					onClick={() => LoginSubmit()}
					className="registerButton"
					type="button"
				>
					LOG IN
				</button>
			</div>

			<div className="TeacherRight">
				<img src={teachers} className="FormPic" alt="Teacher" />

				<p className="FormHeader">Teachers</p>
				<div className="FormLinks">
					<Link className="LogInLinkON">LOG IN</Link>
					<Link className="FormLinkModal" onClick={OpenSignCloseLog}>
						SIGN UP
					</Link>
				</div>
				<div className="UserInput">
					<input type="email" required placeholder="Email Address" />
					<input placeholder="Password" />
				</div>

				<button
					onClick={() => LoginSubmit()}
					className="registerButton"
					type="button"
				>
					LOG IN
				</button>
			</div>
		</div>
	);

	const bodyTwo = (
		<div className="Form">
			<div className="StudentLeft">
				<img src={students} className="FormPic" alt="Students" />
				<p className="FormHeader">Students</p>
				<div className="FormLinks">
					<Link className="FormLinkModal" onClick={OpenLogCloseSign}>
						LOG IN
					</Link>{" "}
					<Link className="SignUpLinkON">SIGN UP</Link>
				</div>
				<SignUpStudent />
				<br />
			</div>

			<div className="TeacherRight">
				<img src={teachers} className="FormPic" alt="Teacher" />
				<p className="FormHeader">Teachers</p>
				<div className="FormLinks">
					<Link className="FormLinkModal" onClick={OpenLogCloseSign}>
						LOG IN
					</Link>{" "}
					<Link className="SignUpLinkON">SIGN UP</Link>
				</div>
				<SignUpTeacher />
			</div>
		</div>
	);

	return (
		<>
			<div>
				<Link onClick={openSignup}>
					<i className="fa fa-user-circle" />
					REGISTER
				</Link>
				<Modal open={signup} className={classes.modal} onClose={closeSignup}>
					{bodyTwo}
				</Modal>

				<Link onClick={openLogin}>{"|"}LOG IN</Link>
				<Modal open={login} className={classes.modal} onClose={closeLogin}>
					{body}
				</Modal>
			</div>
		</>
	);
}

export default FormModal;
