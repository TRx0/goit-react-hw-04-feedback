import PropTypes from 'prop-types';
import { Text } from './notyfi.styled';

export const Notification = () => {
  return <Text>There is no feedback</Text>;
};

Notification.propTypes = {
  Text: PropTypes.string,
};