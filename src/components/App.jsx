import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(good, neutral, bad);

  const keyObject = () => {
    return Object.keys({ good, neutral, bad });
  };

  // Функція буде передаватися в фідбек і змінювати стейт

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };
  // Метод який рахує стейт

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // Метод який рахує позитивні фідбеки
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positiveCount = (good * 100) / total;
    if (total) {
      return positiveCount.toFixed(2);
    } else {
      return 0;
    }
  };

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={keyObject()} leaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </>
  );
};
