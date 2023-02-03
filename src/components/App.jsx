import PT from 'prop-types';
import React, { Component } from 'react';

import {
  FeedbackOptions,
  Notification,
  Section,
  Statistics,
} from '../components';
import css from './app.module.css';

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PT.number,
    neutral: PT.number,
    bad: PT.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnOptionClick = stateKey => {
    this.setState(prevState => {
      return {
        [stateKey]: prevState[stateKey] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total !== 0) {
      return Math.floor((this.state.good * 100) / total);
    }
  };

  render() {
    return (
      <div className={css.feedbackWrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onBtnOptionClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
