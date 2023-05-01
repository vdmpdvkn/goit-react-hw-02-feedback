import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
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
        <Section title={'Please leave a feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.isZero() ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              options={this.state}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
              countTotal={this.countTotalFeedback()}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
