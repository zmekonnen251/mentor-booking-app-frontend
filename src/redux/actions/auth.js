import {
	SIGN_UP_USER,
	SIGN_IN_USER,
	SIGN_OUT_USER,
	SIGN_UP_MENTOR,
	SIGN_IN_MENTOR,
	SIGN_OUT_MENTOR,
} from '../actionTypes';

import * as api from '../api';

export const signUpUser = (userData, navigate) => async (dispatch) => {
	try {
		const res = await api.signUpUser(userData);
		console.log(res.data);
		if (res.status === 201) {
			dispatch({
				type: SIGN_UP_USER,
				payload: res.data,
			});
			navigate('/');
		}
	} catch (error) {
		console.log(error);
	}
};

export const signInUser = (userData, navigate) => async (dispatch) => {
	try {
		const res = await api.signInUser(userData);
		console.log(res);
		if (res.status === 200) {
			dispatch({
				type: SIGN_IN_USER,
				payload: res.data,
			});
			navigate('/');
		}
	} catch (error) {
		console.log(error);
	}
};
