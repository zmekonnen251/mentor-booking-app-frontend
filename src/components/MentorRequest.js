/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MentorRequestForm from './MentorRequestForm';
import LoadingSpinner from './LoadingSpinner';

import './auth.css';

const MentorRequest = () => {
	const loading = useSelector((state) => state.mentors.loading);
	const status = useSelector((state) => state.mentors.status);
	const user = JSON.parse(localStorage.getItem('profile'));
	const navigate = useNavigate();

	const handleBack = () => {
		if (user?.role === 'superadmin') {
			window.location.reload('/');
		} else {
			navigate('/');
		}
	};

	return (
		<>
			{!loading && status === 'ok' ? (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<p className='success-message'>Your request sent successfully!</p>
					<button onClick={handleBack}>
						{user?.role === 'superadmin' ? 'Add Mentor' : 'Back to home'}
					</button>
				</div>
			) : loading && status === '' ? (
				// eslint-disable-next-line react/jsx-indent
				<LoadingSpinner />
			) : (
				<MentorRequestForm />
			)}
		</>
	);
};

export default MentorRequest;
