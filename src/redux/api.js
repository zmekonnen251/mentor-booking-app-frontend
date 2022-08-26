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

export const signUpUser = (data) => API.post('users', data);
export const signInUser = (data) => API.post('users/sign_in', data);
export const signOutUser = () => API.delete('users/sign_out');
export const signUpMentor = (data) => API.post('mentors', data);
export const signInMentor = (data) => API.post('mentors/sign_in', data);
export const signOutMentor = () => API.delete('mentors/sign_out');
export const addSpecialization = (data) => API.post('technologies', data);
