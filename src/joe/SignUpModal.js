import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SignUp from './SignUp.js'
// import CloseIcon from '@material-ui/icons/Close';
import Link from '@material-ui/core/Link'
import "../CSS/joe/loginmodal.css";


function getModalStyle() {
  const top = 50;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 700,
    //height: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function SignUpModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
// the x to exit the page. Needs to be in the top right hand corner

  const body = (
    <div style={modalStyle} className={classes.paper}>
        {/* <span className="close" onClick = {handleClose}><CloseIcon/></span> */}
        <SignUp />
    </div>
  );

  return (
    <div>

      <Link type="button" class = 'navbutton' onClick={handleOpen}>
        
                {/* this needs to be changed to suit the previous page */}
                
                REGISTER | 
        
      </Link>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
        
      </Modal>
      
    </div>

    

      
  );
}


export default SignUpModal 