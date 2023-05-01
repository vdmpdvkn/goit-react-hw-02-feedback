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
          {countTotalFeedback() === 0 ? (
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
