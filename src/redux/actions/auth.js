/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import {
  SIGN_UP_USER,
  SIGN_IN_USER,
  SIGN_OUT_USER,
} from '../actionTypes';

import * as api from '../api';

export const signUpUser =	(userData, navigate, setIsSignUp) => async (dispatch) => {
	  try {
	    const res = await api.signUpUserApi(userData);
	    if (res.status === 201) {
	      dispatch({
	        type: SIGN_UP_USER,
	        payload: res.data,
	      });
	      setIsSignUp(false);
	      navigate('/auth/signin');
	    }
	  } catch (error) {
	    // console.log(error);
	  }
};

export const signInUser = (data, navigate) => async (dispatch) => {
  try {
    const res = await api.signInUserApi(data);

    if (res.status === 200) {
      const { jwt, user } = res.data;
      const { avatar } = user;
      const userData = { jwt, avatar, ...user.user };
      userData.type = 'user';
      dispatch({
        type: SIGN_IN_USER,
        payload: userData,
      });
      navigate('/');
    }
  } catch (error) {
    // console.log(error);
  }
};

export const signOutUser = (navigate, type, setUser) => async (dispatch) => {
  try {
    const res = await api.signOutUserApi();

    if (res.status === 200) {
      dispatch({
        type: SIGN_OUT_USER,
        payload: res.data,
      });
      setUser(null);
      navigate(`/auth/signin`);
    }
  } catch (error) {
    // console.log(error);
  }
};
