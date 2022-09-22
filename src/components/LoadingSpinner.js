import React from 'react';
import { TailSpin } from 'react-loading-icons';
import './LoadingSpinner.css';

const LoadingSpinner = () => (
  <div className="spinner">
    <TailSpin className="spin" stroke="#97bf0f" strokeWidth={3} />
  </div>
);

export default LoadingSpinner;
