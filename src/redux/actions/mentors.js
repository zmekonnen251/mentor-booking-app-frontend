/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import {
  FETCH_MENTORS,
  APPROVE_MENTOR,
  REMOVE_MENTOR,
  BAN_MENTOR,
  MENTOR_REQUEST,
  LOADING,
} from '../actionTypes';
import {
  fetchMentorsApi,
  approveMentorApi,
  banMentorApi,
  removeMentorApi,
  addSpecializationApi,
  mentorRequestApi,
} from '../api';

export const fetchMentors = () => async (dispatch) => {
  try {
    const res = await fetchMentorsApi();
    const unapprovedMentors = res.data.unapproved_mentors;
    const approvedMentors = res.data.approved_mentors;

    dispatch({
      type: FETCH_MENTORS,
      payload: { unapprovedMentors, approvedMentors },
    });
  } catch (error) {
    // console.log(error);
  }
};

export const mentorRequest = (mentor) => async (dispatch) => {
	  try {
	    const res = await mentorRequestApi(mentor.mentorData);
	    if (res.status === 201) {
	      const id = res.data.mentor_id;
	      const { technologies } = mentor;
	      const data = { technologies, mentor_id: id };
	      await addSpecializationApi(data);
	      dispatch({
	        type: MENTOR_REQUEST,
	        payload: res.status,
	      });
	      // navigate('/auth/mentor/signin');
	    }
	  } catch (error) {
	    // console.log(error);
	  }
};

export const mentorRequestLoading = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
};

export const approveMentor = (mentorId) => async (dispatch) => {
  try {
    const res = await approveMentorApi(mentorId);
    if (res.status === 200) {
      dispatch({
        type: APPROVE_MENTOR,
        payload: mentorId,
      });
    }
  } catch (error) {
    // console.log(error);
  }
};

export const banMentor = (mentorId) => async (dispatch) => {
  try {
    const res = await banMentorApi(mentorId);
    if (res.status === 200) {
      dispatch({
        type: BAN_MENTOR,
        payload: mentorId,
      });
    }
  } catch (error) {
    // console.log(error);
  }
};

export const removeMentor = (mentorId) => async (dispatch) => {
  try {
    const res = await removeMentorApi(mentorId);
    if (res.status === 200) {
      dispatch({
        type: REMOVE_MENTOR,
        payload: mentorId,
      });
    }
  } catch (error) {
    // console.log(error);
  }
};
