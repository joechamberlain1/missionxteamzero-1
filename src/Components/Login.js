import React from 'react';
import '../CSS/login.css'
import students from '../Students.jpg'
import teachers from '../teacher-1.jpg'
import {Link } from 'react-router-dom'

// this will all be addded to the hompage and will need to be placed over the top of it 
function LogIn() {
  return (
    // needs a better class name now I've found out that signup needs to go here too
    <div className='Login'>

      {/* <h1>LOG IN</h1>    */}
      <div className='StudentLogIn'>
        <img src={students} className="LogInPic" alt="Students" />
        <p>Students</p>
        {/* these a tags will be changed to Link once we have added in the newer pages */}
        <a href='#'>Log In</a> <Link to='/SignUp'>Sign Up</Link>
        <div className='UserInput'>
          <div className ='LogInput'>
          <input placeholder='Email Address'></input>
          <input placeholder="Password"></input>
          {/* have added link to the student project library page. User data has not been added yet */}
          <Link to="/StudentProjectLib"><button className="LogInButton">Log In</button></Link>
        </div>
        </div>
      </div>

      <div className='TeacherLogIn'>
        <img src={teachers} className="LogInPic" alt="Teacher" />
        <p>Teachers</p>
        {/* these a tags will be changed to Link once we have added in the newer pages */}
        <a href='#'>Log In</a> <Link to='/SignUp'>Sign Up</Link>
        <div className='UserInput'>
        <div className ='LogInput'>
          <input type='email' required placeholder='Email Address'></input>
          <input placeholder="Password"></input>
          {/* Will be changed to teachers page once the page has been made */}
          <Link to="/StudentProjectLib"><button className="LogInButton">Log In</button></Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default LogIn