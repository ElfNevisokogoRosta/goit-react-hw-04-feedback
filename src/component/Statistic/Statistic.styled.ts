import styled from "styled-components";
const Container = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
`
const Title = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
  text-align: center;
  font-size: 28px;
  color: #B04759;
`
const StatisticList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
  justify-content: center;
  gap: 15px;
`
const StatisticEl = styled.li`
  width: 100px;
  padding: 15px 30px;
  background-color:rgb(231, 97, 97, 0.5);
  text-align: center;
  color: #fff;
  border-radius: 8px;
`
const Percentage = styled.p`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 32px;
  color: #Ffffff;
  ${(props)=>{
    if(props !== undefined){
      switch(props.theme){
        case 'default':
          return 'background-color: #8BACAA ;'
        case 'bad':
          return `background-color: #FF6B6B ;`
        case 'neutral': 
          return `background-color: #FFD93D ;`
        case 'bitBetter':
          return `background-color: #4D96FF ;`
        case 'good': 
          return 'background-color: #6BCB77 ;'
       }
    }

  }}
  padding: 20px 40px;
  border-radius: 12px;
`
export {Container, Title, StatisticList, StatisticEl, Percentage}