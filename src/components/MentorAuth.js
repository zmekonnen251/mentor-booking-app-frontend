import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpMentor, signInMentor } from '../redux/actions/auth';

import '../styles/auth.scss';

const initialState = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
	image: '',
	technologies: '',
	bio: '',
};

const MentorAuth = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [mentorImg, setMentorImg] = useState(null);
	const [isSignUp, setIsSignUp] = useState(false);
	const [formData, setFormData] = useState(initialState);

	const handleSubmit = (event) => {
		event.preventDefault();
		validateForm();
		setMentorImg(event.target.avatar.files[0]);
	};

	const validateEmail = (email, confirmEmail) => {
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!isSignUp) {
			return re.test(String(email).toLowerCase());
		} else {
			return re.test(String(email).toLowerCase()) && email === confirmEmail;
		}
	};

	const validatePassword = (password, confirmPassword) => {
		if (!isSignUp) {
			return password.length > 6;
		} else {
			return password === confirmPassword && password.length > 6;
		}
	};

	const validateForm = () => {
		console.log('validateForm');
		if (!validateEmail(formData.email, formData.confirmEmail)) {
			setEmailError(true);
		} else {
			setEmailError(false);
		}

		if (!validatePassword(formData.password, formData.confirmPassword)) {
			setPasswordError(true);
		} else {
			setPasswordError(false);
		}

		if (!emailError && !passwordError) {
			if (isSignUp) {
				const data = new FormData();
				data.append('mentor[name]', formData.name);
				data.append('mentor[email]', formData.email);
				data.append('mentor[bio]', formData.email);
				data.append('mentor[password]', formData.password);
				data.append('mentor[avatar]', mentorImg);

				const technologies = formData.technologies.split(',');

				dispatch(signUpMentor(data, technologies, navigate, setIsSignUp));
			} else {
				const mentor = {
					email: formData.email,
					password: formData.password,
				};
				dispatch(signInMentor({ mentor }, navigate));
			}
		}
	};
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const switchMode = () => {
		setIsSignUp(!isSignUp);
	};

	return (
		<div className='auth'>
			<h1 className='auth__title'>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
			<form className='auth__form' onSubmit={handleSubmit}>
				{isSignUp && (
					<input
						type='text'
						name='name'
						placeholder='Name'
						onChange={handleChange}
						className='auth__form__input'
					/>
				)}
				<input
					type='email'
					name='email'
					placeholder='Email'
					onChange={handleChange}
					className='auth__form__input'
				/>
				{isSignUp && (
					<input
						type='email'
						name='confirmEmail'
						placeholder='Confirm Email'
						onChange={handleChange}
						className='auth__form__input'
					/>
				)}
				<input
					name='password'
					type='password'
					placeholder='Password'
					onChange={handleChange}
					className='auth__form__input'
				/>
				{isSignUp && (
					<>
						<input
							type='password'
							name='confirmPassword'
							placeholder='Confirm Password'
							onChange={handleChange}
							className='auth__form__input'
						/>

						<input
							type='text'
							name='bio'
							placeholder='Bio'
							onChange={handleChange}
							className='auth__form__input'
						/>

						<input
							type='text'
							name='technologies'
							placeholder='Specializations'
							onChange={handleChange}
							className='auth__form__input'
						/>

						<span className='specialization'>
							specializations separeted by comma!
						</span>

						<input
							type='file'
							name='avatar'
							placeholder='Image'
							onChange={handleChange}
							className='auth__form__input'
						/>
					</>
				)}

				<button type='submit' className='auth__form__button'>
					{isSignUp ? 'Submit Request' : 'Sign In'}
				</button>
				<button type='button' onClick={switchMode} className='auth__mode'>
					{isSignUp
						? 'Already have an account ? Sign in'
						: "Don't have an account ? Sign Up"}
				</button>
				<NavLink to='/auth/user'>
					<button className='auth__mode'>Sign in as a user</button>
				</NavLink>
			</form>
		</div>
	);
};

export default MentorAuth;
