import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from '../redux/store';
import Layout from '../layouts/Layout';
import Mentors from '../components/Mentors';
import Navbar from '../components/Navbar';

describe('Testing if all components render correctly', () => {
  it('Testing Layout Component', () => {
    const tree = render(
      <Provider store={configureStore}>
        <Layout />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Testing Mentors Component', () => {
    const tree = render(
      <Provider store={configureStore}>
        <Router>
          <Mentors />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Testing Navbar Component', () => {
    const tree = render(
      <Provider store={configureStore}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
