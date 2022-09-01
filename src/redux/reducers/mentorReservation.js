import {
  RESERVE_MENTOR, CANCEL_RESERVE_MENTOR,
  FETCH_RESERVATIONS,
} from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case RESERVE_MENTOR:
      // eslint-disable-next-line no-case-declarations
      const updatedState = [
        ...state, action.payload.newBooking,
      ];
      action.payload.navigate('/myreservations');
      return updatedState;
    case CANCEL_RESERVE_MENTOR:
      return [
        ...state.filter((reservation) => reservation.id !== action.payload),
      ];
    case FETCH_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};
