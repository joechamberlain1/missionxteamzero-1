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
		//closes login and opens signup, used for internal links
	};

	async function studentLoginSubmit() {
		const requestURL1 = "http://localhost:8080/api/user/login";
		const Password = document.getElementById("studentLoginPassword").value;
		const Email = document.getElementById("studentLoginEmail").value;
		const LoginData = {
			Password: Password,
			Email: Email,
		};
		console.log(LoginData);
		// alert("Successfully loged in");

		fetch(requestURL1, {
			method: "POST",
			body: JSON.stringify(LoginData),
			headers: {
				Accept: "*",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.text())
			.then((result) => {
				console.log("API result", result);
				if (result === "Could not find a user with the provided email ID") {
					alert(result);
				}
				if (result === "Invalid password.") {
					alert(result);
				}
				if (result === "Successfully logged in user!") {
					window.location.replace("http://localhost:3000/StudentProfilePage");
					alert(result);
				}
			});
	}

	async function TeacherLoginSubmit() {
		const requestURL1 = "http://localhost:8080/api/user/login";
		const Password = document.getElementById("teacherLoginPassword").value;
		const Email = document.getElementById("teacherLoginEmail").value;
		const LoginData = {
			Password: Password,
			Email: Email,
		};
		console.log(LoginData);
		// alert("Successfully loged in");

		fetch(requestURL1, {
			method: "POST",
			body: JSON.stringify(LoginData),
			headers: {
				Accept: "*",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.text())
			.then((result) => {
				console.log("API result", result);
				if (result === "Could not find a user with the provided email ID") {
					alert(result);
				}
				if (result === "Invalid password.") {
					alert(result);
				}
				if (result === "Successfully logged in user!") {
					window.location.replace("http://localhost:3000/TeacherProfilePage");
					alert(result);
				}
			});
	}

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
					<input
						placeholder="Email Address"
						type="text"
						name="studentLoginEmail"
						id="studentLoginEmail"
						required
					></input>
					<input
						placeholder="Password"
						type="password"
						name="studentLoginPassword"
						id="studentLoginPassword"
						required
					></input>
					{/* have added link to the student project library page. User data has not been added yet */}
				</div>

				<button
					onClick={() => studentLoginSubmit()}
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
					<input
						placeholder="Email Address"
						type="text"
						name="teacherLoginEmail"
						id="teacherLoginEmail"
						required
					></input>
					<input
						placeholder="Password"
						type="password"
						name="teacherLoginPassword"
						id="teacherLoginPassword"
						required
					></input>
					{/* have added link to the student project library page. User data has not been added yet */}
				</div>

				<button
					onClick={() => TeacherLoginSubmit()}
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
					</Link>
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
					</Link>
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
					<i className="fa fa-user-circle" /> REGISTER
				</Link>
				<Modal open={signup} className={classes.modal} onClose={closeSignup}>
					{bodyTwo}
				</Modal>

				<Link onClick={openLogin}>{" | "}LOG IN</Link>
				<Modal open={login} className={classes.modal} onClose={closeLogin}>
					{body}
				</Modal>
			</div>
		</>
	);
}

export default FormModal;
