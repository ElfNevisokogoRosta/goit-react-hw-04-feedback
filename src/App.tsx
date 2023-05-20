import React, {useState} from 'react';
import { BtnController } from './component/BtnController/BtnController';
import { Statistic } from './component/Statistic/Statistic';
import { Container, Title, Btn } from './App.styled';
const App: React.FC =()=> {
  const [good, setGood] = useState<number>(0);
  const [bad, setBad] = useState<number>(0);
  const [neutral, setNeutral] = useState<number>(0);
  function goodFeedback(func: (arg0: number, arg1: React.Dispatch<React.SetStateAction<number>>) => void){
    func(good, setGood)
  }
  function neutralFeedback(func: (arg0: number, arg1: React.Dispatch<React.SetStateAction<number>>) => void){
    func(neutral, setNeutral)
  }
  function badFeedback(func: (arg0: number, arg1: React.Dispatch<React.SetStateAction<number>>) => void){
    func(bad, setBad)
  }
  return (
    <Container>
      <Title>Feedback page</Title>
      <BtnController badFeedback={badFeedback} goodFeedback={goodFeedback} neutralFeedback={neutralFeedback}/>
      <Statistic  good={good} bad={bad} neutral={neutral} />  
      <Btn onClick={(e: React.MouseEvent<HTMLButtonElement>)=>{setBad(0); setGood(0); setNeutral(0)}}>Reset</Btn>
    </Container>
  );
}

export default App;
