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
        </div>
      </div>
    </div>
  );
}
