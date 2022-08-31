import React from 'react';
import { useSelector } from 'react-redux';
import { TailSpin } from 'react-loading-icons';
import style from './MyReservations.module.css';

export default function MyReservations() {
  const reservations = useSelector((state) => state.reservations);

  return (
    <div className={style.myreservations}>
      <div className={style.pagetitle}>
        <h1 className={style.maintitle}>
          My Reservations
        </h1>
        <p>List of All reserved sessions with reservations</p>
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
            {reservations.length === 0 ? <TailSpin />
              : reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td className={style.mentordata}>
                    <img src={reservation.avatar} alt={`${reservation.mentor_name}`} />
                    <div className={style.mentorname}>
                      <h3>{reservation.mentor_name}</h3>
                      <h3>{reservation.mentor_email}</h3>
                      <p>{reservation.city}</p>
                      <p>{reservation.country}</p>
                    </div>
                  </td>
                  <td className="hr-center">{reservation.date}</td>
                  <td className="hr-center">
                    <button type="button" className={style.deletebtn}>Cancel</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
