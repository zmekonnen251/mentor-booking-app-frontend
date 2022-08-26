import React, { useEffect, useState } from 'react';
import { FaTicketAlt } from 'react-icons/fa';
import { TailSpin } from 'react-loading-icons';
import { useParams } from 'react-router-dom';
import style from './Details.module.css';

export default function Details() {
  const URL = 'https://random-data-api.com/api/users/random_user';
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setMentor(data);
      })
      .catch((error) => setMentor(error.message));
  }, []);

  return (
    <div className={style.detailscontainer}>
      { mentor ? (
        <div className={style.mentor}>
          <div className={style.avatar}>
            <img src={mentor.avatar} alt={`${mentor.firt_name} Avatar`} />
          </div>
          <div className={style.details}>
            <h2>{`${mentor.first_name} ${mentor.last_name}`}</h2>
            <p>{mentor.email}</p>
            <ul className={style.textdetails}>
              <li>
                <h5>ID:</h5>
                <h5>{id}</h5>
              </li>
              <li>
                <h5>Phone:</h5>
                <h5>{mentor.phone_number}</h5>
              </li>
              <li>
                <h5>Date of Birth:</h5>
                <h5>{mentor.date_of_birth}</h5>
              </li>
              <li>
                <h5>City:</h5>
                <h5>{mentor.address.city}</h5>
              </li>
              <li>
                <h5>Country:</h5>
                <h5>{mentor.address.country}</h5>
              </li>
            </ul>
            <button type="button" className={style.reserve}>
              <FaTicketAlt />
              Reserve
            </button>
          </div>
        </div>
      ) : <div><TailSpin stroke="#97bf0f" strokeWidth={3} /></div>}
    </div>
  );
}
