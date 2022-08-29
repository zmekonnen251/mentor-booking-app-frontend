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
          <img className={style.avatar} src={`${user.user.avatar}`} alt="Avatar" />
        </div>
        <div className={style.card_bdy}>
          <div className={style.name}>
            <h3>{user.user.user.name}</h3>
          </div>
          <p>{user.user.user.email}</p>
        </div>
      </div>

      <div className={style.user_contact}>
        <div className={style.user_form}>
          <p className={style.user_name}>{user.user.user.name}</p>
          <p>{user.user.user.email}</p>
          <button onClick={logOut} type="button">Logout</button>
        </div>
      </div>
    </div>
  );
}
