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
          <Link to="facebook"><FaFacebookF /></Link>
          <Link to="twitter"><FaTwitter /></Link>
          <Link to="googleplus"><FaGooglePlusG /></Link>
          <Link to="instagram"><FaInstagram /></Link>
          <Link to="linkedin"><FaLinkedinIn /></Link>
        </ul>
        <p>
          <FaRegCopyright />
          2015 Microverse
        </p>
      </div>
    </nav>
  );
}
