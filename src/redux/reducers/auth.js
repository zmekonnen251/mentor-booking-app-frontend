import {
	SIGN_UP_USER,
	SIGN_IN_USER,
	SIGN_OUT_USER,
	SIGN_UP_MENTOR,
	SIGN_IN_MENTOR,
	SIGN_OUT_MENTOR,
} from '../actionTypes';

const initialState = {
	authData: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SIGN_UP_USER:
			return {
				...state,
				authData: action.payload,
			};
		case SIGN_IN_USER:
			console.log(action.payload);
			localStorage.setItem('profile', JSON.stringify(action?.payload));

			return { ...state, authData: action?.payload };
		case SIGN_OUT_USER:
			localStorage.clear();
			return {
				...state,
				authData: null,
			};
		// case SIGN_UP_MENTOR:
		// 	return {
		// 		...state,
		// 		mentor: action.payload,
		// 	};
		// case SIGN_IN_MENTOR:
		// 	return {
		// 		...state,
		// 		mentor: action.payload,
		// 	};
		// case SIGN_OUT_MENTOR:
		// 	return {
		// 		...state,
		// 		mentor: action.payload,
		// 	};
		default:
			return state;
	}
};
