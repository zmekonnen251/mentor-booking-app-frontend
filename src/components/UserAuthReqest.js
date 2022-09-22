import React from 'react';
import { useSelector } from 'react-redux';
import UserAuth from './UserAuth';
import LoadingSpinner from './LoadingSpinner';

const UserAuthReqest = () => {
   const loading = useSelector((state) => state.authReducer.loading);
   const status = useSelector((state) => state.authReducer.status);

  return (
    <>
      {!loading && status === 'ok'
        ? setTimeout(() => {
          <p className="success-message">You signed up successfully!</p>
        }, 500)
        : (loading && status === '')
          ? <LoadingSpinner /> : <UserAuth />}
    </>
  );
  )
}

export default UserAuthReqest;