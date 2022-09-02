import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import mentorsReducer from './reducers/mentors';
import mentorReservationReducer from './reducers/mentorReservation';
import toggleReducer from './reducers/toggle';

export default configureStore({
  reducer: {
    auth: authReducer,
    mentors: mentorsReducer,
    reservations: mentorReservationReducer,
    toggle: toggleReducer,
  },
});
