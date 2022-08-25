import {
	SIGN_UP_USER,
	SIGN_IN_USER,
	SIGN_OUT_USER,
	SIGN_UP_MENTOR,
	SIGN_IN_MENTOR,
	SIGN_OUT_MENTOR,
} from '../actionTypes';

import * as api from '../api';

export const signUpUser =
	(userData, navigate, setIsSignUp) => async (dispatch) => {
		try {
			const res = await api.signUpUser(userData);
			console.log(res.data);
			if (res.status === 201) {
				dispatch({
					type: SIGN_UP_USER,
					payload: res.data,
				});
				setIsSignUp(false);
				navigate('/auth/user');
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

export const signOutUser = (navigate) => async (dispatch) => {
	try {
		const res = await api.signOutUser();
		console.log(res);
		if (res.status === 200) {
			dispatch({
				type: SIGN_OUT_USER,
				payload: res.data,
			});
			navigate('/');
		}
	} catch (error) {
		console.log(error);
	}
};

export const signUpMentor =
	(mentorData, technologies, navigate, setIsSignUp) => async (dispatch) => {
		try {
			const res = await api.signUpMentor(mentorData);
			console.log(res.data);
			console.log(res.status);
			if (res.status === 201) {
				const mentor_id = res.data.mentor_id;
				await api.addSpecialization({ technologies, mentor_id });
				dispatch({
					type: SIGN_UP_MENTOR,
					payload: res.data.message,
				});

				setIsSignUp(false);
				navigate('/auth/mentor');
			}
		} catch (error) {
			console.log(error);
		}
	};

export const signInMentor = (mentorData, navigate) => async (dispatch) => {
	try {
		const res = await api.signInMentor(mentorData);
		console.log(res);
		if (res.status === 200) {
			dispatch({
				type: SIGN_IN_MENTOR,
				payload: res.data,
			});
			navigate('/');
		}
	} catch (error) {
		console.log(error);
	}
};

export const signOutMentor = (navigate) => async (dispatch) => {
	try {
		const res = await api.signOutMentor();
		console.log(res);
		if (res.status === 200) {
			dispatch({
				type: SIGN_OUT_MENTOR,
				payload: res.data,
			});
			navigate('/');
		}
	} catch (error) {
		console.log(error);
	}
};
