import { Component } from 'react';
import propTypes from 'prop-types';
import capitalize from 'js/capitalize';
import { Button } from './FeedbackOptions.styled';
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
            <Button type="button" onClick={this.props.onLeaveFeedback}>
              {capitalize(option)}
            </Button>
          </li>
        ))}
      </ul>
    );
  }
}
export default FeedbackOptions;
