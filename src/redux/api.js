import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).jwt
    }`;
  }
  return req;
});

export const signUpUserApi = (data) => API.post('users', data);
export const signInUserApi = (data) => API.post('users/sign_in', data);
export const signOutUserApi = () => API.delete('users/sign_out');
export const mentorRequestApi = (data) => API.post('mentor-request', data);
export const addSpecializationApi = (data) => API.post('technologies', data);

export const fetchMentorsApi = () => API.get('/mentors/list');
export const approveMentorApi = (mentorId) => API.put(`/approve_mentor/${mentorId}`);

export const banMentorApi = (mentorId) => API.put('/ban_mentor', { id: mentorId, approved: false });
export const removeMentorApi = (mentorId) => API.delete(`/remove_mentor/${mentorId}`);
export const reserveMentorApi = (data) => API.post('/reserve', data);
export const cancelReservationApi = (id) => API.delete(`/cancel_reservation/${id}`);
export const fetchReservationsApi = () => API.get('/reservations');
