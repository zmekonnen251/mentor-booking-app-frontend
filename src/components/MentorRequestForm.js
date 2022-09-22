/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mentorRequest, mentorRequestLoading } from '../redux/actions/mentors';

import './auth.css';

const initialState = {
  name: '',
  email: '',
  password: '',
  img_url: '',
  technologies: '',
  bio: '',
  phone: '',
};

const MentorRequestForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    const re =			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    if (!validateEmail(formData.email, formData.confirmEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!emailError) {
      const data = new FormData();
      data.append('mentor[name]', formData.name);
      data.append('mentor[email]', formData.email);
      data.append('mentor[bio]', formData.bio);
      data.append('mentor[img_url]', formData.avatar);
      data.append('mentor[phone]', formData.phone);

      const technologies = formData.technologies.split(',');
      const mentor = {
        mentorData: data,
        technologies,
      };
      dispatch(mentorRequestLoading());
      dispatch(mentorRequest(mentor, navigate));
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

  return (
    <div className="auth">
      <h1 className="auth__title">Mentor Request</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="auth__form__input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="auth__form__input"
        />
        <input
          name="phone"
          type="phone"
          placeholder="Phone Number"
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
          type="text"
          name="avatar"
          placeholder="Image url"
          onChange={handleChange}
          className="auth__form__input"
        />

        <button type="submit" className="auth__form__button">
          Submit Request
        </button>

        <NavLink to="/auth/signin">
          <button className="auth__mode" type="button">
            Sign in as a user
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default MentorRequestForm;
