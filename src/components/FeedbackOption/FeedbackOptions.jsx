import PropTypes from 'prop-types';
import { Box, Button } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const item = options.map(option => (
    <Box key={option}>
      <Button
        type="button"
        name={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    </Box>
  ));
  return <ul>{item}</ul>;
};

FeedbackOptions.propTypes = {
  Button: PropTypes.string,
};