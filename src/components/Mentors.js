import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loading-icons';
import { Link } from 'react-router-dom';
import style from './Mentors.module.css';

export default function Mentors(props) {
  const { mentors } = props;
  const [startIndex, setStartIndex] = useState(0);

  const nextPage = () => {
    setStartIndex(startIndex + 3);
  };

  const previousPage = () => {
    setStartIndex(startIndex - 3);
  };

  return (
    <ul className={style.mentors}>
      {
        mentors.length !== 0 ? mentors.slice(startIndex, startIndex + 3).map((mentor) => (
          <Link to={`mentor/${mentor.id}`} key={mentor.id} className={style.mentor}>
            <div className={style.mentorImg}>
              <img className={style.avatar} src={mentor.avatar_url} alt={mentor.name} />
            </div>
            <h2 className={style.name}>{mentor.name}</h2>
            <h2 className={style.bio}>{mentor.bio}</h2>
            <ul>
              {mentor.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </Link>
        )) : <TailSpin stroke="#97bf0f" strokeWidth={3} />
      }
      { startIndex >= 3 ? (
        <button type="button" className={style.prevbtn} onClick={() => previousPage()} aria-label="Previous">
          <FaArrowLeft />
        </button>
      ) : '' }
      { (mentors.length - startIndex) > 3 ? (
        <button type="button" className={style.nextbtn} onClick={() => nextPage()} aria-label="Next">
          <FaArrowRight />
        </button>
      ) : '' }
    </ul>
  );
}

Mentors.propTypes = {
  mentors: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ),
};

Mentors.defaultProps = {
  mentors: [],
};
