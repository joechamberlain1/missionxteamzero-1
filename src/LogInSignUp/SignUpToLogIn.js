import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";
import SignUpTeacher from "./SignUpTeachers";
import SignUpStudent from "./SignUpStudent";



const useStyles = makeStyles((theme) => ({


	modal: {

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textDecoration: 'none'

	}
}));

export default function SignUpToLogIn() {
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
				
					<SignUpStudent />
				
					<SignUpTeacher />
				
			</div>
		
	);

	return (

		<div>
			<Link onClick={handleOpen} >
				SIGN UP
			</Link>
			<Modal
				open={open}
				onClose={handleClose}
				className={classes.modal}
			>
				{body}
			</Modal>
		</div>
	);
}
