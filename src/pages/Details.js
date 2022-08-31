import React, { useState } from 'react';
import { FaTicketAlt } from 'react-icons/fa';
import { TailSpin } from 'react-loading-icons';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import style from './Details.module.css';
import { reserveMentor } from '../redux/actions/mentorReservation';

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const mentors = useSelector((state) => state.mentors.approvedMentors);
  const mentor = mentors.filter((mentor) => mentor.id === +id)[0];
  const user = JSON.parse(localStorage.getItem('profile'));
  const initialState = { country: '', city: '', date: '' };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reserveData = new FormData();
    reserveData.append('mentor_id', mentor.id);
    reserveData.append('user_id', user.id);
    reserveData.append('country', formData.country);
    reserveData.append('city', formData.city);
    reserveData.append('date', formData.date);
    dispatch(reserveMentor(reserveData));
  };

  return (
    <div className={style.detailscontainer}>
      {mentor ? (
        <div className={style.mentor}>
          <div className={style.avatar}>
            <img src={mentor.avatar_url} alt={`${mentor.name} Avatar`} />
          </div>
          <div className={style.details}>
            <h2>{mentor.name}</h2>
            <h2>{mentor.email}</h2>
            <p>{mentor.email}</p>
            <ul className={style.textdetails}>
              <li>
                <h5>ID:</h5>
                <h5>{id}</h5>
              </li>
              <li>
                <h5>Phone:</h5>
                <h5>000-000-000</h5>
              </li>
              <li>
                <h5>City:</h5>
                <h5>Some city</h5>
              </li>
              <li>
                <h5>Country:</h5>
                <h5>Some country</h5>
              </li>
              <ul className={style.tech}>
                {mentor.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </ul>
            <form action="" onSubmit={handleSubmit}>
              <input type="text" name="city" placeholder="city" onChange={handleChange} />
              <input type="date" name="date" id="" onChange={handleChange} />
              <input type="" name="country" placeholder="country" onChange={handleChange} />
              <button
                disabled={!user}
                type="submit"
                className={style.reserve}
              >
                <FaTicketAlt />
                Reserve
              </button>
            </form>
            {!user && (
              <>
                <p>You must log in or signup first to reserve a mentor.</p>
                <NavLink to="/auth/user" className={style.reserve}>Login</NavLink>
              </>
            )}

          </div>
        </div>
      ) : <div><TailSpin stroke="#97bf0f" strokeWidth={3} /></div>}
    </div>
  );
}
