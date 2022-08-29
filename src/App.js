import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './layouts/Layout';
import { fetchMentors } from './redux/actions/mentors';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMentors());
  }, []);

  return <Layout />;
}

export default App;
