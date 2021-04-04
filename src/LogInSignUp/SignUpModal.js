// import React from "react";
// import Dialog from "@material-ui/core/Dialog";
// import "./SignUp.css";
// import SignUpTeacher from "./SignUpTeachers";
// import SignUpStudent from "./SignUpStudent";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { useTheme } from "@material-ui/core/styles";
// // import { Link } from 'react-router-dom'




// function SignUpModal() {
// 	const [open, setOpen] = React.useState(false);
// 	const theme = useTheme();
// 	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

// 	const handleClickOpen = () => {
// 		setOpen(true);
// 	};

// 	const handleClose = () => {
// 		setOpen(false);
// 	};
	
// 	return (

// 		<div>
// 			<div onClick={handleClickOpen} className="a2">
			// <i class="fa fa-user-circle" aria-hidden="true" /> Register
// 				<Dialog
// 					fullWidth
// 					fullScreen={fullScreen}
// 					open={open}
// 					onClose={handleClose}
// 					aria-labelledby="form-dialog-title"
// 				>
						// <div className="Form">
						// 	<div className="StudentSignUp">
						// 		<SignUpStudent />
						// 	</div>

						// 	<div className="TeacherSignUp">
						// 		<SignUpTeacher />
						// 	</div>
						// </div>
// 				</Dialog>
				
// 			</div>
// 		</div>
// 	);
// }

// export default SignUpModal;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";
import SignUpTeacher from "./SignUpTeachers";
import SignUpStudent from "./SignUpStudent";



const useStyles = makeStyles((theme) => ({

  	paper: {

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		position: 'absolute'
  },

  modal:{

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	  
  }
}));

function SignUpModal() {
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
							<div className="StudentSignUp">
								<SignUpStudent />
							</div>

							<div className="TeacherSignUp">
								<SignUpTeacher />
							</div>
						</div>
    </div>
  );

  return (
	   
    <div>
      <Link onClick={handleOpen} className="a2">
	  <i class="fa fa-user-circle" aria-hidden="true" /> Register
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
	   


export default SignUpModal
