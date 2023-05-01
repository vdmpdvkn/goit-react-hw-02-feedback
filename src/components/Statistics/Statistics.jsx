import { Component } from 'react';
import capitalize from 'components/capitalize';
import propTypes from 'prop-types';
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
      <ul>
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
      </ul>
    );
  }
}
export default Statistics;
