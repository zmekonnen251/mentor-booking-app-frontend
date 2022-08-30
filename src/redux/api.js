import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/',
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
export const signUpMentorApi = (data) => API.post('mentors', data);
export const signInMentorApi = (data) => API.post('mentors/sign_in', data);
export const signOutMentorApi = () => API.delete('mentors/sign_out');
export const addSpecializationApi = (data) => API.post('technologies', data);

export const fetchMentorsApi = () => API.get('/mentors/list');
export const approveMentorApi = (mentorId) => API.put('/approve_mentor', { id: mentorId, approved: true });

export const banMentorApi = (mentorId) => API.put('/ban_mentor', { id: mentorId, approved: false });
export const removeMentorApi = (mentorId) => API.delete(`/remove_mentor/${mentorId}`);
