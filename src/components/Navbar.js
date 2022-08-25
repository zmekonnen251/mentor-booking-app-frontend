import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaTwitter,
} from 'react-icons/fa';
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <Link to="/" className={style.logo}>BookAMentor</Link>
      <div className={style.menu}>
        <NavLink to="/" activeclassname={style.activelink}>Home</NavLink>
        <NavLink to="/home">Reserve</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/details">Details</NavLink>
      </div>

      <div className={style.footer}>
        <ul className={style.social}>
          <a href="facebook" target="_blank" aria-label="facebook"><FaFacebookF /></a>
          <a href="twitter" target="_blank" aria-label="twitter"><FaTwitter /></a>
          <a href="googleplus" target="_blank" aria-label="google"><FaGooglePlusG /></a>
          <a href="instagram" target="_blank" aria-label="instagram"><FaInstagram /></a>
          <a href="linkedin" target="_blank" aria-label="linkedin"><FaLinkedinIn /></a>
        </ul>
        <p>
          <FaRegCopyright />
          2015 Microverse
        </p>
      </div>
    </nav>
  );
}
