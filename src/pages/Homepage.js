import React, { useEffect, useState } from 'react';
import Mentors from '../components/Mentors';
import style from './Homepage.module.css';

export default function Homepage() {
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
    <div className={style.homepage}>
      <div className={style.pagetitle}>
        <h1 className={style.maintitle}>Our Mentors</h1>
        <p>Please select a mentor</p>
      </div>
      <Mentors mentors={mentors} />
    </div>
  );
}
