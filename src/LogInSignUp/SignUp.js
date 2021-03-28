import React from 'react';
import './SignUp.css';
import SignUpTeacher from './SignUpTeachers'
import SignUpStudent from './SignUpStudent'

function SignUp() {

  return (

    <div className='Form'>

      <div className='StudentSignUp'>
        <SignUpStudent />

      </div>

      <div className='TeacherSignUp'>
        <SignUpTeacher />
      </div>
    </div>

  )
}

export default SignUp