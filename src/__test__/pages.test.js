import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from '../redux/store';
import Homepage from '../pages/Homepage';
import MyReservations from '../pages/MyReservations';

describe('Testing if all pages render correctly', () => {
  it('Testing Homepage page', () => {
    const tree = render(
      <Provider store={configureStore}>
        <Router>
          <Homepage />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Testing MyReservations page', () => {
    const tree = render(
      <Provider store={configureStore}>
        <Router>
          <MyReservations />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

