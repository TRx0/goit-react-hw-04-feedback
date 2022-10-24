import PropTypes from 'prop-types';
import { Component } from 'react';
import { Container } from './section.styled';
import { Statistics } from './Statistic/Statistics';
import { FeedbackOptions } from '../components/FeedbackOption/FeedbackOptions';
import { Notification } from '../components/Notify/Notify';

export const App = () => {
  return <Section />;
};

export class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalCount() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPercentage(propertyName) {
    const total = this.totalCount();
    const value = this.state[propertyName];
    const percentage = (value / total) * 100;
    return Number(percentage.toFixed());
  }

  onLeaveFeedback = e => {
    const option = e.target.name;

    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalCount();
    const percentage = this.countPercentage('good');
    const options = Object.keys(this.state);
    const onLeaveFeedback = this.onLeaveFeedback;
    return (
      <Container>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        ) : (
          <Notification />
        )}
      </Container>
    );
  }
}

Section.propTypes = {
  div: PropTypes.string,
  h2: PropTypes.string,
  button: PropTypes.string,
  li: PropTypes.string,
};