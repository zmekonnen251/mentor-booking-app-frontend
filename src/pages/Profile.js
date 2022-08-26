import React from 'react';
import style from './Profile.module.css';

export default function Profile() {
  return (
    <div className={style.user_container}>
      <div className={style.user_details}>
        <div className={style.img_cont}>
          <img src="" alt="" />
        </div>
        <div className={style.card_bdy}>
          <div className={style.text}>
            <h3>Wuletaw</h3>
            <h3>Wonte</h3>
          </div>
          <p>example@mail.com</p>
        </div>
      </div>

      <div className={style.user_contact}>
        <form className={style.class}>
          <label htmlFor="user-name">
            User name:
            <input type="text" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="text" />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
