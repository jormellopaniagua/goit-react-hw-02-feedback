import React from 'react';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ onLeaveFeedback }) => {
  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <h2>Leave Feedback</h2>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
