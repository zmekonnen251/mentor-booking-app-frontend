import { useSelector } from 'react-redux';
import Mentors from '../components/Mentors';
import style from './Homepage.module.css';

export default function Homepage() {
  const approvedMentors = useSelector((state) => state.mentors.approvedMentors);

  return (
    <div className={style.homepage}>
      <div className={style.pagetitle}>
        <h1 className={style.maintitle}>
          Our Mentors
        </h1>
        <p>Please select a mentor</p>
      </div>
      <Mentors mentors={approvedMentors} />
    </div>
  );
}
