import React, { useState } from 'react';
import { FaTicketAlt } from 'react-icons/fa';
import { TailSpin } from 'react-loading-icons';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import style from './Details.module.css';
import { reserveMentor } from '../redux/actions/mentorReservation';

export default function Details() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const mentors = useSelector((state) => state.mentors.approvedMentors);
  const mentor = mentors.filter((mentor) => mentor.id === +id)[0];
  const user = JSON.parse(localStorage.getItem('profile'));
  const initialState = { country: '', city: '', date: '' };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reserveData = new FormData();
    reserveData.append('mentor_id', mentor.id);
    reserveData.append('user_id', user.id);
    reserveData.append('country', formData.country);
    reserveData.append('city', formData.city);
    reserveData.append('date', formData.date);
    dispatch(reserveMentor(reserveData, navigate));
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
            <p>{mentor.bio}</p>
            <div className={style.textdetails}>
              <ul className={style.tech}>
                {mentor.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <form onSubmit={handleSubmit} className={style.form}>
              <div className={style.wrapper}>
                <input type="" name="country" placeholder="country" onChange={handleChange} />
                <input type="text" name="city" placeholder="city" onChange={handleChange} />
              </div>
              <input className={style.date} type="date" name="date" id="" onChange={handleChange} />
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
              <div className={style.logincontainer}>
                <p>You must log in or signup first to reserve a mentor.</p>
                <NavLink to="/auth/user" className={style.reserve}>Login</NavLink>
              </div>
            )}

          </div>
        </div>
      ) : <div><TailSpin stroke="#97bf0f" strokeWidth={3} /></div>}
    </div>
  );
}
