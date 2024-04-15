import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback;

  if (good === 0 && neutral === 0 && bad === 0) {
    return <Notification message="No feedback given" />;
  }

  const total = good + neutral + bad;
  const positivePercentage = (good / total) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Statistics;
