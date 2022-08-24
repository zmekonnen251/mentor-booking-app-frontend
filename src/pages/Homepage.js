import React from 'react';
import Navbar from '../components/Navbar';
import style from './Homepage.module.css';

export default function Homepage() {
  return (
    <div className={style.homepage_container}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.content}>
        <h2>Hello</h2>
      </div>
    </div>
  );
}
