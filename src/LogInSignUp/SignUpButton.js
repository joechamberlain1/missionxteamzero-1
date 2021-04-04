import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SignUpTeacher from "./SignUpTeachers";
import SignUpStudent from "./SignUpStudent";
import { Link } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({


	modal: {

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		

	},

	
	
}));

function SignUpButton() {
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
		
			<div className="Form">
				
					<SignUpStudent />
				
					<SignUpTeacher />
				
			</div>
		
	);

	return (

		<div>
			<Link className={classes.button} onClick={handleOpen}>
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



export default SignUpButton