import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <Link to="/">BookMentor</Link>
    </nav>
  );
}
