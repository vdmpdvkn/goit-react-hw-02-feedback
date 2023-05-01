import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

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
    const {
      state,
      onLeaveFeedback,
      countPositiveFeedbackPercentage,
      countTotalFeedback,
      isZero,
    } = this;
    return (
      <>
        <Section title={'Please leave a feedback'}>
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {isZero() ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              options={state}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
              countTotal={countTotalFeedback()}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
