// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Login from './Login.js'
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
//     // height: 800,
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// function LogInModal() {
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
//       <Login />
//     </div>
//   );

//   return (
//     <div>

//       <Link className= 'navbutton' onClick={handleOpen}>

//       Log In
      
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


// export default LogInModal 

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import {makeStyles} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core';
import './css/SignUp.css';
import students from '../Students.jpg'
import teachers from '../teacher-1.jpg'
import {Link } from 'react-router-dom'


// const useStyles = makeStyles((theme) => ({

// paper: {
        
//   display: "flex",
//   // float: 'right',
//   justifyContent: 'row',
//   boxShadow: "none",
//   border: "1px solid",
//   backgroundColor: "#E5AB2C",
//   color: "white",
//   fontSize: 10,
//   textAlign: 'center',
//   // "&:hover": {
//   //     backgroundColor: "#E5AB2C",
//   //     boxShadow: "none",
//   // },
// },
// }));


function LogInModal() {
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
      <p onClick={handleClickOpen}>Log In</p>
      
      <Dialog  fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <div className='Form'>

{/* <h1>LOG IN</h1>    */}
<div className='StudentLogIn'>
  <img src={students} className="FormPic" alt="Students" />
  <p>Students</p>
  {/* these a tags will be changed to Link once we have added in the newer pages */}
  <Link className = 'FormLinks'>Log In</Link> <Link className = 'FormLinks'>Sign Up</Link>
  <div className='UserInput'>
    
    <input placeholder='Email Address'></input>
    <input placeholder="Password"></input>
    {/* have added link to the student project library page. User data has not been added yet */}
    </div>
    <Link to="/StudentProjectLib"><Button className ='LogSignButton' fullWidth = {true} color = 'secondary' variant = 'contained'>Log In</Button></Link>
  
  
</div>

<div className='TeacherLogIn'>
  
  <img src={teachers} className="FormPic" alt="Teacher" />
  <p>Teachers</p>
  {/* these a tags will be changed to Link once we have added in the newer pages */}
  <Link className = 'FormLinks'>Log In</Link> <Link className = 'FormLinks'>Sign Up</Link>
  <div className='UserInput'>
  
    <input type='email' required placeholder='Email Address'></input>
    <input placeholder="Password"></input>
    </div>
    {/* Will be changed to teachers page once the page has been made */}
    <Link to="/teacherpro"><Button className ='LogSignButton' color = 'secondary' fullWidth = {true} variant = 'contained'>Log In</Button></Link>
    
    
  
</div>
</div>
      </Dialog>
    </div>
  );
}

export default LogInModal 