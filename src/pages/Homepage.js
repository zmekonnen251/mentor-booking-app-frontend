import React from 'react';
import menuIcon from '../assets/images/ic_menu.svg';
import searchIcon from '../assets/images/ic_search.svg';
import './homepage.scss';

export default function Homepage() {
  return (
    <div className="container">
      <div className="homepage">
        <div className="homepage__overlay">
          <header>
            <button className="button menu" type="button"><img src={menuIcon} alt="hamburger menu" /></button>
            <button className="button search" type="button"><img src={searchIcon} alt="search" /></button>
          </header>

          <div className="homepage__overlay__text">
            <div className="homepage__overlay__text__header">
              <h1>Book a session with a Mentor</h1>
            </div>
            <div className="homepage__overlay__text__body">
              <p>
                It is a long established a reader will be distracted by the readable
                content of a page when looking at its layout.
                <br />
                The point of using Lorem is it has a more-or-less normal
                distribution of letters as opposed to
                <br />
                using Content here, content here, making it look like readable English
              </p>
            </div>
            <div className="homepage__overlay__text__buttons">
              <button className="button reserve" type="button">Reserve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
