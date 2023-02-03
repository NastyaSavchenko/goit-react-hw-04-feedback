import { useState } from 'react';

import {
  FeedbackOptions,
  Notification,
  Section,
  Statistics,
} from '../components';
import css from './app.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const onBtnOptionClick = event => {
    switch (event) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce((acc, value) => acc + value);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total !== 0) {
      return Math.floor((good * 100) / total);
    }
  };

  return (
    <div className={css.feedbackWrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onBtnOptionClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
