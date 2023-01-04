import React from 'react';
import { StyledList, ListElement } from './FeedbackStats.styled';
const FeedbackStats = ({ good, neutral, bad, total, percentage }) => {
  return (
    <StyledList>
      <ListElement>
        Good: <span>{good}</span>
      </ListElement>
      <ListElement>
        Neutral: <span>{neutral}</span>
      </ListElement>
      <ListElement>
        Bad: <span>{bad}</span>
      </ListElement>
      <ListElement>
        Total: <span>{total}</span>
      </ListElement>
      <ListElement>
        Positive feedback: <span>{percentage}%</span>
      </ListElement>
    </StyledList>
  );
};

export default FeedbackStats;
