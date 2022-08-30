/* eslint-disable no-case-declarations */
import {
  FETCH_MENTORS,
  APPROVE_MENTOR,
  BAN_MENTOR,
  REMOVE_MENTOR,
} from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MENTORS:
      return {
        ...state,
        unapprovedMentors: [...action.payload.unapprovedMentors],
        approvedMentors: [...action.payload.approvedMentors],
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
