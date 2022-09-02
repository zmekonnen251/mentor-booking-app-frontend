import { useDispatch, useSelector } from 'react-redux';
import { approveMentor } from '../redux/actions/mentors';
import styles from './PendingMentors.module.css';

const PendingMentors = () => {
  const dispatch = useDispatch();

  const { role } = JSON.parse(localStorage.getItem('profile'));
  let unapprovedMentors = [];
  if (role === 'superadmin') {
    unapprovedMentors = useSelector(
      (state) => state.mentors.unapprovedMentors,
    ).filter((mentor) => mentor.role !== role);
  } else if (role === 'admin') {
    unapprovedMentors = useSelector((state) => state.mentors.unapprovedMentors)
      .filter((mentor) => mentor.role !== role)
      .filter((mentor) => mentor.role !== 'superadmin');
  }

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
                    type="button"
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

export default PendingMentors;
