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
import toggler from '../redux/actions/toggle';

export default function Navbar() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logOut = () => {
    dispatch(signOutUser(navigate, user.type, setUser));
    dispatch(toggler());
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
      <Link to="/" className={style.logo} onClick={() => dispatch(toggler())}>
        BookAMentor
      </Link>

      {user && (
      <Link to="/profile" onClick={() => dispatch(toggler())} className={style.avatarLink}>
        <img className={style.currentAvatar} src={user.avatar} alt={`${user.mentor_name}`} />
      </Link>
      )}
      <div className={style.menu}>
        <NavLink to="/" active className={style.activelink} onClick={() => dispatch(toggler())}>
          Home
        </NavLink>
        {!user && (
        <>
          <NavLink to="/auth/signin" onClick={() => dispatch(toggler())}>Log in</NavLink>
          <NavLink to="/auth/signup" onClick={() => dispatch(toggler())}>Sign up</NavLink>
          <NavLink to="/mentor-request" onClick={() => dispatch(toggler())}>Be a mentor</NavLink>
        </>
        )}
        {user && (
          <>
            <NavLink to="/profile" onClick={() => dispatch(toggler())}>Profile</NavLink>
            <NavLink to="/myreservations" onClick={() => dispatch(toggler())}>My Reservations</NavLink>
            <NavLink to="/reserve" onClick={() => dispatch(toggler())}>Reserve</NavLink>

          </>
        ) }

        {(user?.role === 'admin' || user?.role === 'superadmin') && (
        <>
          <NavLink to="pending-mentors" onClick={() => dispatch(toggler())}>Pending Mentors</NavLink>
          <NavLink to="approved-mentors" onClick={() => dispatch(toggler())}>Mentors List</NavLink>
          <NavLink to="/mentor-request" onClick={() => dispatch(toggler())}>Add Mentor</NavLink>
        </>
        )}
        {user && (
        <a
          className={style.logout}
          onClick={logOut}
          type="button"
          aria-hidden="true"
        >
          Log out
        </a>
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
