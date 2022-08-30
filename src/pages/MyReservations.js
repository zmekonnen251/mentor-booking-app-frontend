import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loading-icons';
import style from './MyReservations.module.css';

export default function MyReservations() {
  const URL = 'https://random-data-api.com/api/v2/users?size=3';
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setMentors(data);
      })
      .catch((error) => setMentors(error.message));
  }, []);

  return (
    <div className={style.myreservations}>
      <div className={style.pagetitle}>
        <h1 className={style.maintitle}>
          My Reservations
        </h1>
        <p>List of All reserved sessions with mentors</p>
      </div>

      <div className={style.mentorstable}>
        <table>
          <thead>
            <tr>
              <th>Mentors</th>
              <th>Scheduled Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mentors.length === 0 ? <TailSpin />
              : mentors.map((mentor) => (
                <tr key={mentor.id}>
                  <td className={style.mentordata}>
                    <img src={mentor.avatar} alt={`${mentor.first_name} ${mentor.last_name}`} />
                    <div className={style.mentorname}>
                      <h3>{`${mentor.first_name} ${mentor.last_name}`}</h3>
                      <p>{mentor.email}</p>
                    </div>
                  </td>
                  <td>{mentor.date_of_birth}</td>
                  <td>
                    <button type="button">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
