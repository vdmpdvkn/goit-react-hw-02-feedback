import { Component } from 'react';
import propTypes from 'prop-types';
import capitalize from 'components/capitalize';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    onLeaveFeedback: propTypes.func.isRequired,
    options: propTypes.array.isRequired,
  };

  render() {
    const { options } = this.props;
    return (
      <ul>
        {options.map(option => (
          <li key={option}>
            <button type="button" onClick={this.props.onLeaveFeedback}>
              {capitalize(option)}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default FeedbackOptions;
