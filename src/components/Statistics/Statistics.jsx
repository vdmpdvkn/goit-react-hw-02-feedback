import capitalize from 'js/capitalize';
import propTypes from 'prop-types';
import List from './Statistics.styled';
const Statistics = ({
  options,
  countTotal,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <List>
      {Object.entries(options).map(option => (
        <li key={option}>
          {capitalize(option[0])}: {option[1]}
        </li>
      ))}
      <li>Total: {countTotal}</li>
      <li>Positive feedback: {countPositiveFeedbackPercentage.toFixed(0)}%</li>
    </List>
  );
};
Statistics.propTypes = {
  options: propTypes.object.isRequired,
};
export default Statistics;
