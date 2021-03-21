import React from 'react';
import './SignUp.css';
import students from '../Students.jpg'
import teachers from '../teacher-1.jpg'
import {Link } from 'react-router-dom'
import { Button } from '@material-ui/core'


// this will all be addded to the hompage and will need to be placed over the top of it 

function LogIn() {
  return (
    // needs a better class name now I've found out that signup needs to go here too
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
  )
}

export default LogIn