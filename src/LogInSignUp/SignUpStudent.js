import React from "react";
import { useForm } from "react-hook-form";
import students from "../img/LoginSignUp Modal/Students.png";
import { Link } from "react-router-dom";
import LogInToSignUp from './LogInToSignUp'


function SignUpStudent() {
	const { register, handleSubmit, errors, watch } = useForm();

	const onSubmitStudent = (data) => {
		console.log(data);
	};

	return (
		<div className="StudentLeft">
			<img src={students} className="FormPic" alt="Students" />
			<p className='FormHeader'>Students</p>
			<div className='FormLinks'>
			<Link className="FormLinkModal"><LogInToSignUp /></Link>{" "}
			<Link className="SignUpLinkON">SIGN UP</Link>
			</div>
			<form
				action="student register"
				onSubmit={handleSubmit(onSubmitStudent)}
				className="UserInput"
			>
				<input
					placeholder="Full Name"
					type="text"
					name="fullName"
					required
					ref={register}
				/>
				{errors.fullName && <h6>This is required</h6>}
				<input
					placeholder="Email Address"
					type="text"
					name="email"
					required
					ref={register}
				/>
				<input
					placeholder="Password"
					type="password"
					name="password"
					ref={register({ required: true, minLength: 8 })}
				/>
				<input
					placeholder="Confirm Password"
					type="password"
					name="confirmPassword"
					ref={register({ validate: (value) => value === watch("password") })}
				/>
				{/* <Link><input type='submit'><Button className ='LogSignButton' fullWidth = {true} color = 'secondary' variant = 'contained'>Sign Up</Button></input></Link> */}
				<button className='registerButton'>SIGN UP</button>
				{/* have added link to the student project library page. User data has not been added yet */}
			</form>
			<br />
		</div>
	);
}

export default SignUpStudent;
