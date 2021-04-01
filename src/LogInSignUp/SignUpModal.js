import React from "react";
import Dialog from "@material-ui/core/Dialog";
import "./SignUp.css";
import SignUpTeacher from "./SignUpTeachers";
import SignUpStudent from "./SignUpStudent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
// import { Link } from 'react-router-dom'




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
	
	return (

		<div>
			<div onClick={handleClickOpen} className="a2">
			<i class="fa fa-user-circle" aria-hidden="true" /> Register
				<Dialog
					fullWidth
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
				
			</div>
		</div>
	);
}

export default SignUpModal;
