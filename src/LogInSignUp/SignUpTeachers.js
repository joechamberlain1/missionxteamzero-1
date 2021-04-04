import React from "react";
import { useForm } from "react-hook-form";
import teachers from "../img/LoginSignUp Modal/teacher-1.png";
import { Link } from "react-router-dom";
import LogInToSignUp from './LogInToSignUp'

const SignUpTeacher = () => {
	const { register, handleSubmit, errors, watch } = useForm();

	const onSubmitTeacher = (data) => {
		console.log(data);
	};

	return (
		<div className ='TeacherRight'>
			<img src={teachers} className="FormPic" alt="Teacher" />
			<p className = 'FormHeader'>Teachers</p>
			<div className='FormLinks'>
			<Link className="FormLinkModal"><LogInToSignUp /></Link>{" "}
			<Link className="SignUpLinkON">SIGN UP</Link>
			</div>
			<form onSubmit={handleSubmit(onSubmitTeacher)} className="UserInput">
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
					ref={register({ required: true })}
				/>
				{errors.email && <h6>This is required</h6>}
				<input
					placeholder="Password"
					type="password"
					name="password"
					ref={register({ required: "Password is required", minLength: 8 })}
				/>
				<input
					placeholder="Confirm Password"
					type="password"
					name="confirmPassword"
					ref={register({ validate: (value) => value === watch("password") })}
				/>
				{errors.password && <h6>{errors.password.message}</h6>}
				<button className='registerButton'>SIGN UP</button>
			</form>
		</div>
	);
};

export default SignUpTeacher;
