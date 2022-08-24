import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <Link to="/" className={style.logo}>BookAMentor</Link>
      <div className={style.menu}>
        <NavLink to="/" activeClassName={style.activelink}>Home</NavLink>
        <NavLink to="/home">Reserve</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/details">Details</NavLink>
      </div>
      <div className={style.footer}>
        <li>facebook</li>
      </div>
    </nav>
  );
}
