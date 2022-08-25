import React, { useEffect, useState } from 'react';
import style from './Homepage.module.css';

export default function Homepage() {
  const URL = 'https://random-data-api.com/api/v2/users?size=3';
  const [mentors, setMentors] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setMentors(data);
      })
      .catch((error) => setMentors(error.message));
  }, []);

  return (
    <div className={style.homepage}>
      <div className={style.pagetitle}>
        <h1 className={style.maintitle}>
          Our Mentors
        </h1>
        <p>Please select a mentor</p>
      </div>
      <ul className={style.mentors}>
        {
          mentors ? mentors.map((mentor) => (
            <li key={mentor.id} className={style.mentor}>
              <img src={mentor.avatar} alt={mentor.first_name} />
              <h2>{`${mentor.first_name} ${mentor.last_name}`}</h2>
            </li>
          )) : <h2>Loading ... </h2>
        }
      </ul>
    </div>
  );
}
