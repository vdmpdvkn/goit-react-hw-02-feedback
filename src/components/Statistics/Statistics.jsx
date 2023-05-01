import { Component } from 'react';
import capitalize from 'js/capitalize';
import propTypes from 'prop-types';
import List from './Statistics.styled';
class Statistics extends Component {
  static defaultProps = {
    options: {},
  };
  static propTypes = {
    options: propTypes.object.isRequired,
  };
  render() {
    const { options } = this.props;
    return (
      <List>
        {Object.entries(options).map(option => (
          <li key={option}>
            {capitalize(option[0])}: {option[1]}
          </li>
        ))}
        <li>Total: {this.props.countTotal}</li>
        <li>
          Positive feedback:{' '}
          {this.props.countPositiveFeedbackPercentage.toFixed(0)}%
        </li>
      </List>
    );
  }
}
export default Statistics;
