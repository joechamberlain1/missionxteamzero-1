import React from 'react';
import '../CSS/SignUp.css';
import students from '../Students.jpg';
import teachers from '../teacher-1.jpg';
import { Link } from 'react-router-dom';
 
function SignUp(){
    return(

        <div className ='SignUp'>
            <div className='StudentLogIn'>
            <img src={students} className='LogInPic' alt='Students' />
            <p>Students</p>
        {/* these a tags will be changed to Link once we have added in the newer pages */}
        <Link to='/LogIn'>Log In</Link> <Link to='/SignUp'>Sign Up</Link>
        <div className='UserInput'>
        <div className='SignUpInput'>
        <input placeholder='Full Name'></input>
        <input placeholder='Email Address' name='email' required></input>
        <input placeholder='Password'></input>
        <input placeholder='Confirm Password'></input>
          {/* have added link to the student project library page. User data has not been added yet */}
          <Link to="/LogIn"><button className="LogInButton">Sign Up</button></Link>
        </div>
        </div>
      </div>

      <div className='TeacherLogIn'>
        <img src={teachers} className="LogInPic" alt="Teacher" />
        <p>Teachers</p>
        {/* these a tags will be changed to Link once we have added in the newer pages */}
        <Link to='/LogIn'>Log In</Link> <Link to='/SignUp'>Sign Up</Link>
        <div className='UserInput'>
        <div className='SignUpInput'>
        <input placeholder='Full Name'></input>
        <input placeholder='Email Address' name='email' required></input>
        <input placeholder='Password'></input>
        <input placeholder='Confirm Password'></input>
          {/* Will be changed to teachers page once the page has been made */}
          <Link to="/LogIn"><button className="LogInButton">Sign Up</button></Link>
          </div>
          </div>
        </div>
        </div>
      




    //     {/* <div className='StudentSignUp'>
    //     <img src={students} className="LogInPic" alt="Students" />
    //     <p>Students</p> */}
    //     {/* these a tags will be changed to Link once we have added in the newer pages */}
    //     {/* <Link to="/login">Log In</Link> <a href='#'>Sign Up</a>
    //     </div>
    //     <div className='UserInput'>
    //       <div className='SignUpInput'>
    //         <input placeholder='Full Name'></input>
    //         <input placeholder='Email Address'></input>
    //         <input placeholder='Password'></input>
    //         <input placeholder='Confirm Password'></input> */}
    //         {/* have added link to the student project library page. User data has not been added yet */}
    //         {/* <Link to="/StudentProjectLib"><button className="LogInButton">Sign Up</button></Link>
    //       </div>
    //     </div>

    //   <div className='TeacherLogIn'>
    //   <img src={teachers} className="LogInPic" alt="Teacher" />
    //   <p>Teachers</p>
    //   {/* these a tags will be changed to Link once we have added in the newer pages */}
    //   {/* <a href='#'>Log In</a> <a href='#'>Sign Up</a>
    //   </div>
    //   <div className='UserInput'>
    //   <div className='SignUpInput'>
    //     <input placeholder='Full Name'></input>
    //     <input placeholder='Email Address'></input>
    //     <input placeholder='Password'></input>
    //     <input placeholder='Confirm Password'></input> */}
    //     {/* have added link to the student project library page. User data has not been added yet */}
    //     {/* <Link to="/StudentProjectLib"><button className="LogInButton">Sign Up</button></Link>
    //   </div>
    // </div> */}

    )
}

export default SignUp