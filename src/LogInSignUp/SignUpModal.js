// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import SignUp from './SignUp.js'
// // import CloseIcon from '@material-ui/icons/Close';
// import Link from '@material-ui/core/Link'
// import "../CSS/loginmodal.css";
// import "../CSS/nav.css";


// function getModalStyle() {
//   const top = 50;
//   const left = 50 ;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     // width: 700,
//     // height: 400,
//     backgroundColor: theme.palette.background.paper,
//     // border: '1px solid #000',
//     // boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// function SignUpModal() {
//   const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const body = (
//     <div style={modalStyle} className={classes.paper}>
//       <SignUp />
//     </div>
//   );

//   return (
//     <div>

//       <Link className= 'navbutton' onClick={handleOpen}>

//       <i class="fa fa-user-circle" aria-hidden="true"></i> SIGN UP LOG IN
      
//       </Link>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         {body}
//       </Modal>
//     </div>
//   );
// }

// export default SignUpModal 

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import SignUp from './SignUp.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core';
// import {makeStyles} from '@material-ui/core'
import students from '../Students.jpg'
import teachers from '../teacher-1.jpg'
import {Link } from 'react-router-dom'
import Login from './Login.js'


// const useStyles = makeStyles((theme) => ({
//   paper: {
      
//       display: "inline",
//       justifyContent: 'row',      
//       boxShadow: "none",
//       backgroundColor: "#E5AB2C",
//       color: "white",
//       fontSize: 10,

//       // "&:hover": {
//       //     backgroundColor: "#E5AB2C",
//       //     boxShadow: "none",
//       // },
//   },
// }));

function SignUpModal() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  // const classes = useStyles();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <p onClick={handleClickOpen}>
        Register
      </p>      
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <div className ='Form'>
          
          <div className='StudentSignUp'>
          <img src={students} className='FormPic' alt='Students' />
          <p>Students</p>
      {/* these a tags will be changed to Link once we have added in the newer pages */}
      <Link className = 'FormLinks'>Log In</Link> <Link className = 'FormLinks'>Sign Up</Link>

      <div className='UserInput'>
      <input placeholder='Full Name'></input>
      <input placeholder='Email Address' name='email' required></input>
      <input placeholder='Password'></input>
      <input placeholder='Confirm Password'></input>

        {/* have added link to the student project library page. User data has not been added yet */}
        </div>
        <Link><Button className ='LogSignButton' fullWidth = {true} color = 'secondary' variant = 'contained'>Sign Up</Button></Link>
      
      
    </div>

    <div className='TeacherSignUp'>
      <img src={teachers} className="FormPic" alt="Teacher" />
      <p>Teachers</p>
      {/* these a tags will be changed to Link once we have added in the newer pages */}
      <div className='FormLink'>
      <Link className = 'FormLinks'>Log In</Link> <Link className = 'FormLinks'>Sign Up</Link>
      </div>
      <div className='UserInput'>
      
      <input placeholder='Full Name'></input>
      <input placeholder='Email Address' name='email' required></input>
      <input placeholder='Password'></input>
      <input placeholder='Confirm Password'></input>
        {/* Will be changed to teachers page once the page has been made */}
        </div>
        <Link><Button className ='LogSignButton' onClick = {<Login />} fullWidth = {true} color = 'secondary' variant = 'contained'>Sign Up</Button></Link>
        
       
      </div>
      </div>
      </Dialog>
    </div>
  );
}

export default SignUpModal 