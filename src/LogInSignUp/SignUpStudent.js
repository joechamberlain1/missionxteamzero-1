import React from "react";
import { useForm } from "react-hook-form";

function SignUpStudent() {
	const { register, handleSubmit, errors, watch } = useForm();

	const onSubmitStudent = () => {
		const requestURL1 = "http://localhost:8080/api/user/registerStudent";
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
		<div className="StudentLeft">
			<form
				action="submit"
				onSubmit={handleSubmit(onSubmitStudent)}
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
				{/* <Link><input type='submit'><Button className ='LogSignButton' fullWidth = {true} color = 'secondary' variant = 'contained'>Sign Up</Button></input></Link> */}
				<button onClick={() => onSubmitStudent()} className="registerButton">
					SIGN UP
				</button>
				{/* have added link to the student project library page. User data has not been added yet */}
			</form>
		</div>
	);
}

export default SignUpStudent;
