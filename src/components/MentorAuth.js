/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpMentor, signInMentor } from '../redux/actions/auth';

import './auth.css';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  avatar: '',
  technologies: '',
  bio: '',
};

const MentorAuth = (props) => {
  const { type } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(type);
  const [formData, setFormData] = useState(initialState);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (email, confirmEmail) => {
    const re =			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!isSignUp) {
      return re.test(String(email).toLowerCase());
    }
    return re.test(String(email).toLowerCase()) && email === confirmEmail;
  };

  const validatePassword = (password, confirmPassword) => {
    if (!isSignUp) {
      return password.length > 6;
    }
    return password === confirmPassword && password.length > 6;
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

    if (!emailError && !passwordError) {
      if (isSignUp) {
        const data = new FormData();
        data.append('mentor[name]', formData.name);
        data.append('mentor[email]', formData.email);
        data.append('mentor[bio]', formData.bio);
        data.append('mentor[password]', formData.password);
        data.append('mentor[avatar]', formData.avatar);

        const technologies = formData.technologies.split(',');
        const mentor = {
          mentorData: data,
          technologies,
        };

        dispatch(signUpMentor(mentor, navigate, setIsSignUp));
      } else {
        const mentor = {
          email: formData.email,
          password: formData.password,
        };
        dispatch(signInMentor({ mentor }, navigate));
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    if (event.target.name === 'avatar') {
      setFormData({ ...formData, [event.target.name]: event.target.files[0] });
    }
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth">
      <h1 className="auth__title">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        {isSignUp && (
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="auth__form__input"
        />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="auth__form__input"
        />
        {isSignUp && (
        <input
          type="email"
          name="confirmEmail"
          placeholder="Confirm Email"
          onChange={handleChange}
          className="auth__form__input"
        />
        )}
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="auth__form__input"
        />
        {isSignUp && (
        <>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="auth__form__input"
          />

          <input
            type="text"
            name="bio"
            placeholder="Bio"
            onChange={handleChange}
            className="auth__form__input"
          />

          <input
            type="text"
            name="technologies"
            placeholder="Specializations"
            onChange={handleChange}
            className="auth__form__input"
          />

          <span className="specialization">
            specializations separeted by comma!
          </span>

          <input
            type="file"
            name="avatar"
            placeholder="Image"
            onChange={handleChange}
            className="auth__form__input"
          />
        </>
        )}

        <button type="submit" className="auth__form__button">
          {isSignUp ? 'Submit Request' : 'Sign In'}
        </button>
        <button type="button" onClick={switchMode} className="auth__mode">
          {isSignUp
					  ? 'Already have an account ? Sign in'
					  : "Don't have an account ? Sign Up"}
        </button>
        <NavLink to="/auth/user/signin">
          <button className="auth__mode" type="button">
            Sign in as a user
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default MentorAuth;

MentorAuth.defaultProps = {
  type: false,
};
