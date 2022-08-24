import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUser, signInUser } from '../redux/actions/auth';

import '../styles/auth.scss';

const initialState = {
	// name: '',
	email: '',
	password: '',
	// confirmPassword: '',
};

const MentorAuth = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isSignUp, setIsSignUp] = useState(false);
	const [formData, setFormData] = useState(initialState);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (isSignUp) {
			dispatch(signUpUser({ user: formData }, navigate));
		} else {
			dispatch(signInUser({ user: formData }, navigate));
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
							name='specialization'
							placeholder='Specialization'
							onChange={handleChange}
							className='auth__form__input'
						/>
						<span className='specialization'>
							specializations separeted by comma!
						</span>
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
