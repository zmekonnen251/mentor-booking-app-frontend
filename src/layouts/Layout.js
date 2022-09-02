/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import style from './Layout.module.css';
import routes from '../routes';

export default function Layout() {
  const [menu, setMenu] = useState(true);

  const clickHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className={style.layout_container} data-testid="layout">
      <Router>
        <div className={style.navbar}>{menu && <Navbar />}</div>
        <div className={style.content}>
          <button
            type="button"
            className={style.menutoggle}
            aria-label="Menu toggle"
            onClick={() => {
              clickHandler();
            }}
          >
            <FaBars />
          </button>

          <Routes>
            {routes.map((route) => (
              <Route
                key={`key${route.path}`}
                path={route.path}
                element={route.element}
                exact={route.exact}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}
