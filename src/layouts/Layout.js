/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import style from './Layout.module.css';
import routes from '../routes';
import toggler from '../redux/actions/toggle';

export default function Layout() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.toggle);

  return (
    <div className={style.layout_container}>
      <Router>
        <div className={style.navbar}>{menu && <Navbar />}</div>
        <div className={style.content}>
          <button
            type="button"
            className={style.menutoggle}
            aria-label="Menu toggle"
            onClick={() => dispatch(toggler())}
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
