import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import style from './Mentors.module.css';

export default function Mentors(props) {
  const { mentors } = props;
  const [startIndex, setStartIndex] = useState(0);

  const nextPage = () => {
    setStartIndex(startIndex + 3);
  };

  return (
    <ul className={style.mentors}>
      {
        mentors ? mentors.slice(startIndex, startIndex + 3).map((mentor) => (
          <li key={mentor.id} className={style.mentor}>
            <img src={mentor.avatar} alt={mentor.first_name} />
            <h2>{`${mentor.first_name} ${mentor.last_name}`}</h2>
          </li>
        )) : <h2>Loading ... </h2>
      }
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
