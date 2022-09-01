/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "../styles/reserve.css";
import { FaSearch } from "react-icons/fa";
import style from './Reserve.module.css';
import { reserveMentor } from '../redux/actions/mentorReservation';

function Reserve() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));
  const mentors = useSelector((state) => state.mentors.approvedMentors);
  const initialState = {
    country: '', city: '', date: '', mentor_id: '',
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reserveData = new FormData();
    reserveData.append('mentor_id', +formData.mentor_id);
    reserveData.append('user_id', user.id);
    reserveData.append('country', formData.country);
    reserveData.append('city', formData.city);
    reserveData.append('date', formData.date);
    dispatch(reserveMentor(reserveData, navigate));
  };
  return (
    <div className="showcase">
      <p className="search-icon">
        <FaSearch />
      </p>
      <div className="container showcase-inner">
        <h1>Connect with vetted software developer</h1>
        <p className="about">
          Get me a mentor app is built as a capstone project by a group of 5
          microverse talented software developers who want to make the
          engineering world a better place to collaborate. by providing a
          platform to connect experienced and upcoming engineering.
        </p>
        <p className="about">
          It is a free, open-source platform which aims to connect experienced
          and upcoming software developers for a live mentorship all over the
          world.
        </p>

        <div className="btn-container">
          <form onSubmit={handleSubmit}>
            <div className={style.wrapper}>
              <input type="" name="country" placeholder="country" onChange={handleChange} />
              <input type="text" name="city" placeholder="city" onChange={handleChange} />

              <select name="mentor_id" onChange={handleChange}>
                {mentors.map((mentor) => (
                  <option key={mentor.id} value={mentor.id}>{mentor.name}</option>
                ))}
              </select>
              <input className={style.date} type="date" name="date" id="" onChange={handleChange} />
            </div>
            <button
              disabled={!user}
              type="submit"
              className={style.reserve}
            >

              Reserve
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
