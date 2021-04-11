import React from "react";
import { useForm } from "react-hook-form";


function SignUpTeacher() {
	const { register, handleSubmit, errors, watch } = useForm();

	const onSubmitTeacher = (data) => {
		console.log(data);
	};

	return (
		<div>
		<form
				action="student register"
				onSubmit={handleSubmit(onSubmitTeacher)}
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
				{errors.password && <h6>{errors.password.message}</h6>}
				<button className='registerButton'>SIGN UP</button>
			</form>
		</div>
	);
};

export default SignUpTeacher;
