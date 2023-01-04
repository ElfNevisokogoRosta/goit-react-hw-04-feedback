import React from 'react';
import { FeedbackBtnStyled } from './FeedbackBtn.styled';
const FeedbackBtn = ({ func, value }) => {
  return (
    <FeedbackBtnStyled type="button" onClick={func}>
      {value}
    </FeedbackBtnStyled>
  );
};
export default FeedbackBtn;
