/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import {
  SIGN_UP_USER,
  SIGN_IN_USER,
  SIGN_OUT_USER,
  SIGN_UP_MENTOR,
  SIGN_IN_MENTOR,
  SIGN_OUT_MENTOR,
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
	      navigate('/auth/user');
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
    let res = {};
    if (type === 'user') {
      res = await api.signOutUserApi();
    } else {
      res = await api.signOutMentorApi();
    }

    if (res.status === 200) {
      dispatch({
        type: SIGN_OUT_USER,
        payload: res.data,
      });
      setUser(null);
      navigate(`/auth/${type}`);
    }
  } catch (error) {
    // console.log(error);
  }
};

export const signUpMentor =	(mentor, navigate, setIsSignUp) => async (dispatch) => {
	  try {
	    const res = await api.signUpMentorApi(mentor.mentorData);
	    if (res.status === 201) {
	      const id = res.data.mentor_id;
	      const { technologies } = mentor;
	      const data = { technologies, mentor_id: id };
	      await api.addSpecializationApi(data);
	      dispatch({
	        type: SIGN_UP_MENTOR,
	        payload: res.data.message,
	      });

	      setIsSignUp(false);
	      navigate('/auth/mentor');
	    }
	  } catch (error) {
	    // console.log(error);
	  }
};

export const signInMentor = (data, navigate) => async (dispatch) => {
  try {
    const res = await api.signInMentorApi(data);
    if (res.status === 200) {
      const { jwt, mentor } = res.data;
      const { avatar } = mentor;
      const mentorData = { jwt, avatar, ...mentor.mentor };
      mentorData.type = 'mentor';
      dispatch({
        type: SIGN_IN_MENTOR,
        payload: mentorData,
      });
      navigate('/');
    }
  } catch (error) {
    // console.log(error);
  }
};

export const signOutMentor = (navigate) => async (dispatch) => {
  try {
    const res = await api.signOutMentorApi();
    if (res.status === 200) {
      dispatch({
        type: SIGN_OUT_MENTOR,
        payload: res.data,
      });
      navigate('/');
    }
  } catch (error) {
    // console.log(error);
  }
};
