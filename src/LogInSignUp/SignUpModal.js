import React from "react";
import Dialog from "@material-ui/core/Dialog";
import "./SignUp.css";
import { Link } from "react-router-dom";
import "../CSS/nav.css";
import SignUpTeacher from "./SignUpTeachers";
import SignUpStudent from "./SignUpStudent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
// import { makeStyles } from '@material-ui/styles'

// const useStyles = makeStyles((theme) => ({
//   Modals: {
//       display: 'flex',
//       justifyContent:'center',
//   },
// }));
function SignUpModal() {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	// const classes = useStyles();

	return (
		<div>
			<Link onClick={handleClickOpen} className="a2">
				<i class="fa fa-user-circle" aria-hidden="true" /> Register
				<Dialog
					fullScreen={fullScreen}
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
				>
					<div className="Form">
						<div className="StudentSignUp">
							<SignUpStudent />
						</div>

						<div className="TeacherSignUp">
							<SignUpTeacher />
						</div>
					</div>
				</Dialog>
			</Link>
		</div>
	);
}

export default SignUpModal;
