import React from 'react';

const FeedbackOptions = ({ option, onLeaveFeedback }) => (
  <div>
    {option.map(label => (
      <button key={label} type="button" onClick={() => onLeaveFeedback(label)}>
        {label}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
