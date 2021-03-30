import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import "./SignUp.css";
import students from "../Students.jpg";
import teachers from "../teacher-1.jpg";
import { Link } from "react-router-dom";
import "../CSS/nav.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function LogInModal() {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Link onClick={handleClickOpen} className="a2">
				Login
				<Dialog
					fullScreen={fullScreen}
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
				>
					<div className="Form">
						{/* <h1>LOG IN</h1>    */}
						<div className="StudentLogIn">
							<img src={students} className="FormPic" alt="Students" />
							<p>Students</p>
							{/* these a tags will be changed to Link once we have added in the newer pages */}
							<Link className="FormLinks">Log In</Link>{" "}
							<Link to="/SignUp" className="FormLinks">
								Sign Up
							</Link>
							<div className="UserInput">
								<input placeholder="Email Address"></input>
								<input placeholder="Password"></input>
								{/* have added link to the student project library page. User data has not been added yet */}
							</div>
							<Link to="/StudentProjectLib">
								<Button
									className="LogSignButton"
									fullWidth={true}
									color="secondary"
									variant="contained"
								>
									Log In
								</Button>
							</Link>
						</div>

						<div className="TeacherLogIn">
							<img src={teachers} className="FormPic" alt="Teacher" />
							<p>Teachers</p>
							{/* these a tags will be changed to Link once we have added in the newer pages */}
							<Link className="FormLinks">Log In</Link>{" "}
							<Link to="/SignUp" className="FormLinks">
								Sign Up
							</Link>
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
								<Button
									className="LogSignButton"
									color="secondary"
									fullWidth={true}
									variant="contained"
								>
									Log In
								</Button>
							</Link>
						</div>
					</div>
				</Dialog>
			</Link>
		</div>
	);
}

export default LogInModal;
