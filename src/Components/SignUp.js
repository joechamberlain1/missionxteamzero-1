import React from 'react';
import '../CSS/SignUp.css';
import students from '../Students.jpg';
import teachers from '../teacher-1.jpg';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Login from './Login.js'
// import SignUpModal from './SignUpModal.js'
 
function SignUp(){
    return(

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
      
    )
}

export default SignUp