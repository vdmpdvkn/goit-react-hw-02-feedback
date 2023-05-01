import propTypes from 'prop-types';
import capitalize from 'js/capitalize';
import { Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <Button type="button" onClick={onLeaveFeedback}>
            {capitalize(option)}
          </Button>
        </li>
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
  options: propTypes.array.isRequired,
};
export default FeedbackOptions;
