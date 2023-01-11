/* eslint-disable no-case-declarations */
import {
  FETCH_MENTORS,
  APPROVE_MENTOR,
  BAN_MENTOR,
  REMOVE_MENTOR,
  MENTOR_REQUEST,
  LOADING,
} from '../actionTypes';

const initialState = {
  unapprovedMentors: [],
  approvedMentors: [],
  mentorRequest: null,
  loading: false,
  status: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENTORS:
      return {
        ...state,
        unapprovedMentors: action.payload.unapprovedMentors,
        approvedMentors: action.payload.approvedMentors,
      };
    case MENTOR_REQUEST:
      return {
        ...state,
        loading: false,
        status: 'ok',
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case APPROVE_MENTOR:
      const approvedMentor = state.unapprovedMentors.find(
        (mentor) => mentor.id === action.payload,
      );
      approvedMentor.approved = true;
      return {
        ...state,
        unapprovedMentors: state.unapprovedMentors.filter(
          (mentor) => mentor.id !== action.payload,
        ),
        approvedMentors: [...state.approvedMentors, approvedMentor],
      };
    case BAN_MENTOR:
      const bannedMentor = state.approvedMentors.find(
        (mentor) => mentor.id === action.payload,
      );
      bannedMentor.approved = false;
      return {
        ...state,
        approvedMentors: state.approvedMentors.filter(
          (mentor) => mentor.id !== action.payload,
        ),
        unapprovedMentors: [...state.unapprovedMentors, bannedMentor],
      };
    case REMOVE_MENTOR:
      return {
        ...state,
        approvedMentors: state.approvedMentors.filter(
          (mentor) => mentor.id !== action.payload,
        ),
        unapprovedMentors: state.unapprovedMentors.filter(
          (mentor) => mentor.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
