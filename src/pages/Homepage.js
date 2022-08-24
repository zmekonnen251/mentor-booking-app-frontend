import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import style from './Homepage.module.css';

export default function Homepage() {
  const [menu, setMenu] = useState(false);

  const clickHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className={style.homepage_container}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.content}>
        <button type="button" className={style.menubtn} onClick={() => { clickHandler(); }} aria-label="Hamburger menu">
          <FaBars />
        </button>
        <h2>Hello</h2>
      </div>
    </div>
  );
}
