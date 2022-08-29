import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approveMentor } from '../redux/actions/mentors';
import styles from './ApproveMentors.module.css';

const ApproveMentors = () => {
  const dispatch = useDispatch();

  const unapprovedMentors = useSelector(
    (state) => state.mentors.unapprovedMentors,
  );

  return (
    <>
      <div className={styles.container}>
        <h1>List of unapproved mentors</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {unapprovedMentors.map((mentor) => (
              <tr key={mentor.id}>
                <td>{mentor.name}</td>
                <td>{mentor.email}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(approveMentor(mentor.id))}
                  >
  Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApproveMentors;
