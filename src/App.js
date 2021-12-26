import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './components/Feedback/Feedback.module.css';

import Statistic from './components/Statistic/Statistic';
import Feedback from './components/Feedback/Feedback';
import Section from './components/Section/Section';

export default function GetFeedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementHandler = value => {
    if (value === 'good') {
      setGood(good + 1);
    }
    if (value === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (value === 'bad') {
      setBad(bad + 1);
    }
  };

  const getTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    const percent = Math.round((good * 100) / getTotalFeedback());
    return percent;
  };

  return (
    <div className={s.container}>
      <Section title="Please leave feedback" />
      <Feedback
        option={['good', 'neutral', 'bad']}
        onIncrement={incrementHandler}
      />
      <Section title="Statistics" />
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={getTotalFeedback}
        percent={positiveFeedbackPercentage}
      />
    </div>
  );
}

GetFeedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
