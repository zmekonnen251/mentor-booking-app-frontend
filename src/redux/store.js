import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import mentorsReducer from './reducers/mentors';

export default configureStore({
  reducer: {
    auth: authReducer,
    mentors: mentorsReducer,
  },
});
