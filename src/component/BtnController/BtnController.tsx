import React from 'react';
import { Container, Titlte, BtnContianer, Button } from './BtnController.styled';

interface BtnControllerProps {
  goodFeedback: (func: (arg0: number, arg1: React.Dispatch<React.SetStateAction<number>>) => void) => void;
  neutralFeedback: (func: (arg0: number, arg1: React.Dispatch<React.SetStateAction<number>>) => void) => void;
  badFeedback:(func: (arg0: number, arg1: React.Dispatch<React.SetStateAction<number>>) => void) => void;
}
export const BtnController: React.FC<BtnControllerProps> = ({ goodFeedback, neutralFeedback, badFeedback }) => {
  function goodFeedbackHandler(state: number, setState: React.Dispatch<React.SetStateAction<number>>) {
    setState(state + 1);
  }
  function neutralFeedbackHandler(state: number, setState: React.Dispatch<React.SetStateAction<number>>) {
    setState(state + 1);
  }
  function badFeedbackHandler(state: number, setState: React.Dispatch<React.SetStateAction<number>>) {
    setState(state + 1);
  }
  return (
    <Container>
      <Titlte>Pleese leave feedback</Titlte>
      <BtnContianer>
      <Button onClick={(e: React.MouseEvent<HTMLButtonElement>)=> goodFeedback(goodFeedbackHandler)}>Good</Button>
      <Button onClick={(e: React.MouseEvent<HTMLButtonElement>)=> neutralFeedback(neutralFeedbackHandler)}>Neutral</Button>
      <Button onClick={(e: React.MouseEvent<HTMLButtonElement>)=>badFeedback(badFeedbackHandler)}>Bad</Button>
      </BtnContianer>
    </Container>
  );
};
