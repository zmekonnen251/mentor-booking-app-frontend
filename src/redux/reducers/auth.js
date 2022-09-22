import {
  SIGN_UP_USER,
  SIGN_IN_USER,
  SIGN_OUT_USER,
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
      localStorage.setItem('profile', JSON.stringify(action?.payload));

      return { ...state, authData: action?.payload };
    case SIGN_OUT_USER:
      localStorage.clear();
      return {
        ...state,
        authData: null,
      };
    default:
      return state;
  }
};
