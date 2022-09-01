import { RESERVE_MENTOR, CANCEL_RESERVE_MENTOR, FETCH_RESERVATIONS } from "../actionTypes";
import { reserveMentorApi, cancelReservationApi, fetchReservationsApi } from "../api";

export const reserveMentor = (data, navigate) => async (dispatch) => {
  try {
    const res = await reserveMentorApi(data);
    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: RESERVE_MENTOR,
        payload: { newBooking: res.data, navigate },
      });
    }
  } catch (error) {
    // console.log(error);
  }
};

export const cancelReservation = (id) => async (dispatch) => {
  try {
    const res = await cancelReservationApi(id);
    if (res.status === 200) {
      dispatch({
        type: CANCEL_RESERVE_MENTOR,
        payload: id,
      });
    }
  } catch (error) {
    // console.log(error);
  }
};

export const fetchReservation = () => async (dispatch) => {
  try {
    const res = await fetchReservationsApi();
    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: FETCH_RESERVATIONS,
        payload: res.data,
      });
    }
  } catch (error) {
    // console.log(error);
  }
};
