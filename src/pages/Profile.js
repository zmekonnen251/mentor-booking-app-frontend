import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../redux/actions/auth';
import style from './Profile.module.css';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    navigate('/auth/user');
    dispatch(signOutUser());
  };

  return (
    <div className={style.user_container}>
      <div className={style.user_details}>
        <div className={style.img_cont}>
          <img src={`${user.user.avatar}`} alt="Avatar" />
        </div>
        <div className={style.card_bdy}>
          <div className={style.name}>
            <h3>John Doe</h3>
          </div>
          <p>example@mail.com</p>
        </div>
      </div>

      <div className={style.user_contact}>
        <div className={style.user_form}>
          <p>{user.user.user.name}</p>
          <p>{user.user.user.email}</p>
          <button type="button">Logout</button>
        </div>
      </div>
    </div>
  );
}
