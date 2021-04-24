import React from "react";
import { useForm } from "react-hook-form";

function SignUpTeacher() {
	const { register, handleSubmit, errors, watch } = useForm();

	const onSubmitTeacher = () => {
		const requestURL1 = "http://localhost:8080/api/user/registerTeacher";
		const FullName = document.getElementById("FullName").value;
		const Password = document.getElementById("Password").value;
		const Email = document.getElementById("Email").value;
		const formData = {
			FullName: FullName,
			Password: Password,
			Email: Email,
		};
		console.log(formData);

		fetch(requestURL1, {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				Accept: "*",
				"Content-Type": "application/json",
			},
		});
	};

	return (
		<div>
			<form
				// action="student register"
				action="submit"
				onSubmit={handleSubmit(onSubmitTeacher)}
				className="UserInput"
				method="POST"
			>
				<input
					placeholder="Full Name"
					type="text"
					name="FullName"
					id="FullName"
					required
					ref={register}
				/>
				{errors.fullName && <h6>This is required</h6>}
				<input
					placeholder="Email Address"
					type="text"
					name="Email"
					id="Email"
					required
					ref={register}
				/>
				<input
					placeholder="Password"
					type="password"
					name="Password"
					id="Password"
					ref={register({ required: true, minLength: 8 })}
				/>
				<input
					placeholder="Confirm Password"
					type="password"
					name="confirmPassword"
					ref={register({ validate: (value) => value === watch("password") })}
				/>
				{errors.password && <h6>{errors.password.message}</h6>}
				<button onClick={() => onSubmitTeacher()} className="registerButton">
					SIGN UP
				</button>
			</form>
		</div>
	);
}

export default SignUpTeacher;
