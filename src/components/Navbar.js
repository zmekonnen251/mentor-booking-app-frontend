/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import {
  NavLink, Link, useLocation, useNavigate,
} from 'react-router-dom';
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaTwitter,
} from 'react-icons/fa';
import style from './Navbar.module.css';
import { signOutUser } from '../redux/actions/auth';

export default function Navbar() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logOut = () => {
    dispatch(signOutUser(navigate, user.type));
    setUser(null);
  };

  useEffect(() => {
    const token = user?.jwt;
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        logOut();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <nav className={style.nav}>
      <Link to="/" className={style.logo}>
        BookAMentor
      </Link>
      <div className={style.menu}>
        {user ? (
          <>
            <a
              className={style.logout}
              onClick={logOut}
              type="button"
              aria-hidden="true"
            >
              Log out
            </a>
            <NavLink to="/profile">Profile</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/auth/user">Log in</NavLink>
          </>
        )}

        <NavLink to="/" active className={style.activelink}>
          Home
        </NavLink>
        <NavLink to="/home">Reserve</NavLink>
        <NavLink to="/details">Details</NavLink>
      </div>
        <NavLink to="/shop">Shop</NavLink>

        {(user?.role === 'admin' || user?.role === 'superadmin') && (
          <>
            <NavLink to="admin/approve-mentors">Approve Mentors</NavLink>
            <NavLink to="admin/approved-mentors">Approved Mentors</NavLink>
          </>
        )}
      </div>
      <div className={style.footer}>
        <ul className={style.social}>
          <a href="facebook" target="_blank" aria-label="facebook">
            <FaFacebookF />
          </a>
          <a href="twitter" target="_blank" aria-label="twitter">
            <FaTwitter />
          </a>
          <a href="googleplus" target="_blank" aria-label="google">
            <FaGooglePlusG />
          </a>
          <a href="instagram" target="_blank" aria-label="instagram">
            <FaInstagram />
          </a>
          <a href="linkedin" target="_blank" aria-label="linkedin">
            <FaLinkedinIn />
          </a>
        </ul>
        <p>
          <FaRegCopyright />
          {`${currentYear} Microverse`}
        </p>
      </div>
    </nav>
  );
}
