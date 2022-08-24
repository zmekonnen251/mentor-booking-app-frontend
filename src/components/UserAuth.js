import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUser, signInUser } from '../redux/actions/auth';

import '../styles/auth.scss';

const initialState = {
	name: '',
	email: '',
	confirmEmail: '',
	password: '',
	confirmPassword: '',
};

const UserAuth = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isSignUp, setIsSignUp] = useState(false);
	const [formData, setFormData] = useState(initialState);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		validateForm();
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
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

		if (emailError && passwordError) {
			if (isSignUp) {
				dispatch(signUpUser({ user: formData }, navigate));
			} else {
				dispatch(signInUser({ user: formData }, navigate));
			}
		}
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
						required
					/>
				)}
				<input
					type='email'
					name='email'
					placeholder='Email'
					onChange={handleChange}
					className='auth__form__input'
					required
				/>
				{!isSignUp && emailError && (
					<span className='auth__form__error'>Email is not valid</span>
				)}
				{isSignUp && (
					<>
						<input
							type='email'
							name='confirmEmail'
							placeholder='Confirm Email'
							onChange={handleChange}
							className='auth__form__input'
							required
						/>
						{emailError && (
							<span className='auth__form__error'>Email is not valid</span>
						)}
					</>
				)}

				<input
					name='password'
					type='password'
					placeholder='Password'
					onChange={handleChange}
					className='auth__form__input'
					required
				/>
				{!isSignUp && passwordError && (
					<span className='auth__form__error'>Password is not valid</span>
				)}
				{isSignUp && (
					<>
						<input
							type='password'
							name='confirmPassword'
							placeholder='Confirm Password'
							onChange={handleChange}
							className='auth__form__input'
							required
						/>
						{passwordError && (
							<span className='auth__form__error'>Password is not valid</span>
						)}
					</>
				)}

				<button type='submit' className='auth__form__button'>
					{isSignUp ? 'Sign Up' : 'Sign In'}
				</button>
				<button type='button' onClick={switchMode} className='auth__mode'>
					{isSignUp
						? 'Already have an account ? Sign in'
						: "Don't have an account ? Sign Up"}
				</button>

				<NavLink to='/auth/mentor'>
					<button className='auth__mode'>Sign in as a mentor</button>
				</NavLink>
			</form>
		</div>
	);
};

export default UserAuth;
