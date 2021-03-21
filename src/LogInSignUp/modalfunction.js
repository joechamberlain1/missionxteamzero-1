import React from 'react';
import "../CSS/nav.css";
// import Button from '@material-ui/core/Button';
import{makeStyles, ButtonGroup, } from '@material-ui/core'
import SignUpModal from './SignUpModal.js';
import LogInModal from './LoginModal.js';


function ModalFunction() {

  const useStyles = makeStyles((theme) => ({
    LoginModals: {

        maxWidth:50,
        border:'none'
        
  
      
    },
  }));
 
  const classes = useStyles();
  
  return (
    
    <div>
      <ButtonGroup className ={classes.LoginModals} size='small'>
        
          <i class="fa fa-user-circle" aria-hidden="true"></i>
        

        
        <SignUpModal />
        

        
        <LogInModal />
        
      </ButtonGroup>
    </div>

    
  );
}

export default ModalFunction

      