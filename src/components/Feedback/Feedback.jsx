import { useState } from 'react';
import FeedbackBtn from 'components/FeedbackBtn/FeedbackBtn';
import FeedbackStats from 'components/FeedbackStats/FeedbackStats';
import {
  FeedbackSection,
  FeedbackTitle,
  StatTitle,
  Discription,
} from './Feedback.styled';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;
  const goodHandler = () => {
    setGood(state => state + 1);
  };
  const neutralHandler = () => {
    setNeutral(state => state + 1);
  };
  const badHandler = () => {
    setBad(state => state + 1);
  };
  const percentage = () => {
    return Math.round(((neutral + good) / total) * 100, 2);
  };
  return (
    <FeedbackSection>
      <FeedbackTitle>Please leave feedback</FeedbackTitle>
      <FeedbackBtn value={'Good'} func={goodHandler} />
      <FeedbackBtn value={'Neutral'} func={neutralHandler} />
      <FeedbackBtn value={'Bad'} func={badHandler} />
      <StatTitle>Statistics</StatTitle>

      {total === 0 ? (
        <Discription>There is no feedback</Discription>
      ) : (
        <FeedbackStats
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage()}
        />
      )}
    </FeedbackSection>
  );
};

export default Feedback;
