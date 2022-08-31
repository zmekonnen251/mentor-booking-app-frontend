import {
  RESERVE_MENTOR, CANCEL_RESERVE_MENTOR,
  FETCH_RESERVATIONS,
} from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case RESERVE_MENTOR:
      return action.payload;
    case CANCEL_RESERVE_MENTOR:
      return action.payload;
    case FETCH_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};
