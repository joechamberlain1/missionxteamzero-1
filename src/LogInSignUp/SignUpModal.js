import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import SignUpTeacher from "./SignUpTeachers";
import SignUpStudent from "./SignUpStudent";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));

function SignUpModal() {
	const classes = useStyles()
	const [signUp, setSignUp] = useState(false);


	const handleClose = () => {
		setSignUp(false)
	}

	const body = (
		<div className="Form">
			<SignUpStudent />

			<SignUpTeacher />
		</div>
	);

	return (
		<div>
		<Link onClick ={()=> setSignUp(!signUp)}>
			{signUp? 'FUCNTION': 'Register'}
		</Link>

			{signUp? (
				<Modal open ={signUp} onClose={handleClose} className={classes.modal}>
					{body}
				</Modal>
			) : (
				<Modal close = {signUp}></Modal>
			)}
		
		</div>
	);
	
	// return(
	// <div>{open ? handleOpen() : handleClose()}</div>
	// );

}

export default SignUpModal