import PropTypes from 'prop-types';
import React from 'react';

const SuccessMessage = ({ message }) => (
  <div>{message}</div>
);

SuccessMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SuccessMessage;
