import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ option, onLeaveFeedback }) => (
  <div className={s.container}>
    {option.map(label => (
      <button
        key={label}
        className={s.button}
        type="button"
        onClick={() => onLeaveFeedback(label)}
      >
        {label}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  option: PropTypes.array,
  children: PropTypes.func,
};

export default FeedbackOptions;
