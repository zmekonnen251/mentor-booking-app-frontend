import {
  FETCH_MENTORS,
  APPROVE_MENTOR,
  REMOVE_MENTOR,
  BAN_MENTOR,
} from '../actionTypes';
import {
  fetchMentorsApi,
  approveMentorApi,
  banMentorApi,
  removeMentorApi,
} from '../api';

export const fetchMentors = () => async (dispatch) => {
  try {
    const res = await fetchMentorsApi();
    console.log(res);
    const unapprovedMentors = res.data.unapproved_mentors;
    const approvedMentors = res.data.approved_mentors;
    console.log({ unapprovedMentors, approvedMentors });

    dispatch({
      type: FETCH_MENTORS,
      payload: { unapprovedMentors, approvedMentors },
    });
  } catch (error) {
    console.log(error);
  }
};

export const approveMentor = (mentorId) => async (dispatch) => {
  try {
    const res = await approveMentorApi(mentorId);
    console.log(res.data);
    if (res.status === 200) {
      dispatch({
        type: APPROVE_MENTOR,
        payload: mentorId,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const banMentor = (mentorId) => async (dispatch) => {
  try {
    const res = await banMentorApi(mentorId);
    console.log(res.data);
    if (res.status === 200) {
      dispatch({
        type: BAN_MENTOR,
        payload: mentorId,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeMentor = (mentorId) => async (dispatch) => {
  try {
    const res = await removeMentorApi(mentorId);
    console.log(res.data);
    if (res.status === 200) {
      dispatch({
        type: REMOVE_MENTOR,
        payload: mentorId,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
