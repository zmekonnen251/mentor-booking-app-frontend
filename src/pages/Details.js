import React, { useEffect, useState } from 'react';
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
            <h2>
              ID:
              {id}
            </h2>
          </div>
        </div>
      ) : <div><TailSpin stroke="#97bf0f" strokeWidth={3} /></div>}
    </div>
  );
}
