import { Container } from './section.styled';
import { Statistics } from './Statistic/Statistics';
import { FeedbackOptions } from './FeedbackOption/FeedbackOptions';
import { Notification } from './Notify/Notify';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalCount = () => good + neutral + bad;

  const arrayOfButtons = { good, neutral, bad };
  const keysButtons = Object.keys(arrayOfButtons);

  const countPercentage = property => {
    const percentage = (property / totalCount()) * 100;
    return Number(percentage.toFixed());
  };

  const percentage = countPercentage(good);

  const onLeaveFeedback = property => {
    switch (property) {
      case 'good':
        return setGood(prev => prev + 1);
      case 'neutral':
        return setNeutral(prev => prev + 1);
      case 'bad':
        return setBad(prev => prev + 1);
      default:
        return;
    }
  };

  return (
    <div>
      <Container>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={keysButtons}
          onLeaveFeedback={onLeaveFeedback}
        />
        {totalCount() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount()}
            percentage={percentage}
          />
        ) : (
          <Notification />
        )}
      </Container>
    </div>
  );
};

App.propTypes = {
  div: PropTypes.string,
  h2: PropTypes.string,
  button: PropTypes.string,
  li: PropTypes.string,
};