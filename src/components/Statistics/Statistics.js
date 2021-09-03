import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.list}>
    <li className={s.item}>
      <span className={s.itemText}>Good:</span>
      {good}
    </li>
    <li className={s.item}>
      <span className={s.itemText}>Neutral:</span>
      {neutral}
    </li>
    <li className={s.item}>
      <span className={s.itemText}>Bad:</span>
      {bad}
    </li>
    <li className={s.item}>
      <span className={s.itemText}>Total:</span>
      {total}
    </li>
    <li className={s.item}>
      <span className={s.itemText}>Positive feedback:</span>
      {positivePercentage}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
