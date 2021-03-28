import React from 'react'
import { useForm } from 'react-hook-form';
import students from '../Students.jpg';
import { Link } from 'react-router-dom';

function SignUpStudent() {
    const { register, handleSubmit, errors, watch } = useForm();
  
    const onSubmitStudent = data => {
      console.log(data);
    }
  
  
    return (
  

<div className='StudentSignUp'>
        <img src={students} className='FormPic' alt='Students' />
        <p>Students</p>
        {/* these a tags will be changed to Link once we have added in the newer pages */}
        <Link className='FormLinks'>LOG IN</Link> <Link className='FormLinks'>SIGN UP</Link>

        <form action = 'student register' onSubmit={handleSubmit(onSubmitStudent)} className='UserInput' >
          <input placeholder='Full Name' type='text' name='fullName' required ref ={register}/>
          {errors.fullName && (<h6>This is required</h6>)}
          <input placeholder='Email Address' type='text' name='email' required ref ={register}/>
          <input placeholder='Password' type='password' name='password' ref={register({ required:true, minLength: 8 })} />
          <input placeholder='Confirm Password' 
                 type='password' 
                 name='confirmPassword' 
                 ref={register({validate: (value)=>value === watch('password')})} />
          {/* <Link><input type='submit'><Button className ='LogSignButton' fullWidth = {true} color = 'secondary' variant = 'contained'>Sign Up</Button></input></Link> */}
          <input type='Submit' value ='Register'/>
          {/* have added link to the student project library page. User data has not been added yet */}
        </form>

        <br/>

      </div>
    )
}

export default SignUpStudent