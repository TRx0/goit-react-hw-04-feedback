import PropTypes from 'prop-types';
import { List, Item } from './statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <List>
      <Item>
        <h2>Statistics</h2>
      </Item>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive Feedback: {percentage}%</Item>
    </List>
  );
};

Statistics.propTypes = {
  Item: PropTypes.string,
  h2: PropTypes.string,
};