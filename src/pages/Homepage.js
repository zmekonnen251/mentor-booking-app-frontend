import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import style from './Homepage.module.css';

export default function Homepage() {
  const [menu, setMenu] = useState(true);

  const clickHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className={style.homepage_container}>

      <div className={style.navbar}>
        <Navbar />
        <button type="button" className={style.menutoggle} aria-label="Menu toggle" onClick={() => { clickHandler(); }}>
          <FaBars />
        </button>
      </div>
      <div className={style.content}>
        <h2>Hello</h2>
      </div>
    </div>
  );
}
