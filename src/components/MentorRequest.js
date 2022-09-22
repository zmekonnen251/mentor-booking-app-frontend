/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { useSelector } from 'react-redux';
import MentorRequestForm from './MentorRequestForm';
import LoadingSpinner from './LoadingSpinner';

import './auth.css';

const MentorRequest = () => {
  const loading = useSelector((state) => state.mentors.loading);
  const status = useSelector((state) => state.mentors.status);

  return (
    <>
      {!loading && status === 'ok'
        ? <p className="success-message">Your request sent successfully!</p>
        : (loading && status === '')
          ? <LoadingSpinner /> : <MentorRequestForm />}
    </>
  );
};

export default MentorRequest;
