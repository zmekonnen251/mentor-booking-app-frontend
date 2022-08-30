import { RESERVE_MENTOR, CANCEL_RESERVE_MENTOR, FETCH_RESERVATIONS } from "../actionTypes";
import { reserveMentorApi, cancelReservationApi, fetchReservationsApi } from "../api";

export const reserveMentor = (data) => async (dispatch) => {
  try {
    const res = await reserveMentorApi(data);
    if (res.status === 201) {
      dispatch({
        type: RESERVE_MENTOR,
        payload: 'successful',
      });
    }
  } catch (error) {
    // console.log(error);
  }
};

export const cancelReservation = (data) => async (dispatch) => {
  try {
    const res = await cancelReservationApi(data);
    if (res.status === 201) {
      dispatch({
        type: CANCEL_RESERVE_MENTOR,
        payload: 'successful',
      });
    }
  } catch (error) {
    // console.log(error);
  }
};

export const fetchReservation = () => async (dispatch) => {
  try {
    const res = await fetchReservationsApi();
    if (res.status === 201) {
      dispatch({
        type: FETCH_RESERVATIONS,
        payload: 'successful',
      });
    }
  } catch (error) {
    // console.log(error);
  }
};
