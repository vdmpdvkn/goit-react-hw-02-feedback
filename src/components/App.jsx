import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, key) => {
      return (acc += key);
    }, 0);
  };
  isZero = () => {
    const { good, bad, neutral } = this.state;
    if (good === 0 && bad === 0 && neutral === 0) {
      return true;
    }
    return false;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good * 100) / this.countTotalFeedback();
  };
  onLeaveFeedback = evt => {
    const currentBtnValue = evt.currentTarget.textContent.toLowerCase();
    this.setState(prevState => {
      return { [currentBtnValue]: prevState[currentBtnValue] + 1 };
    });
  };
  render() {
    return (
      <>
        <h2>Please leave a feedback </h2>

        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.isZero() ? (
          <Notification title={'No feedback given'} />
        ) : (
          <Statistics
            options={this.state}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            countTotal={this.countTotalFeedback()}
          />
        )}
      </>
    );
  }
}
export default App;
