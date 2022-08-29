import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loading-icons';
import style from './MyReservations.module.css';

export default function MyReservations() {
  const URL = 'https://random-data-api.com/api/v2/users?size=10';
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
        <p>List of All available mentors</p>
      </div>

      <table>
        {mentors.length === 0 ? <TailSpin /> : null }
      </table>
    </div>
  );
}
