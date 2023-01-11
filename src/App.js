import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from './layouts/Layout';
import { fetchMentors } from './redux/actions/mentors';
import { fetchReservation } from './redux/actions/mentorReservation';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMentors());
    dispatch(fetchReservation());
  }, []);
  return <Layout />;
}

export default App;
