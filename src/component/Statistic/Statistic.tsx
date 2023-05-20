import React, {useEffect, useState} from 'react'
import { Container, Title, StatisticList, StatisticEl, Percentage } from './Statistic.styled'
interface StatisticProps{
  good: number,
  neutral: number,
  bad: number,
}
export const Statistic: React.FC<StatisticProps> = ({good, bad, neutral}) => {
  const [theme, setTheme] = useState<string>('default')
  const total= good+bad+neutral;
  const percentage = Math.round((neutral+good)/total*100);
  useEffect(()=>{
    if(percentage >=0 && percentage<=30){
      setTheme('bad');
     }else if( percentage>30 && percentage<=50){
        setTheme('neutral');
     }else if( percentage>50 && percentage <=70){
       setTheme('bitBetter');
     }else if(percentage>70){
       setTheme('good');
     }
     else{
      setTheme('default')
     }
  }
    ,[percentage])
  return (
    <Container>
    <Title>Statistics</Title>
    <StatisticList>
      <StatisticEl>Good: {good}</StatisticEl>
      <StatisticEl>Neutral: {neutral}</StatisticEl>
      <StatisticEl>Bad: {bad}</StatisticEl>
      <StatisticEl>Total: {total} </StatisticEl>
    </StatisticList>
    <Percentage theme={theme}>{total>0 ? (<span>Positive feedback:{percentage}%</span>):(<span>Leave feedback status</span>)}</Percentage>
  </Container>
  )
}
