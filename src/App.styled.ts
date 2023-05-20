import styled from "styled-components";
const Container = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
`
const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 20px;
  color:#6b238c;
`
const Btn = styled.button`
display: block;
  width: 240px;
  background-color: #4287f5;
  padding: 20px 50px;
  font-size: 28px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  color: #ffffff;
  margin-left:auto ;
  margin-right: auto;
  cursor: pointer;
  transition: background-color, 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover{
    background-color: #f5ad42;
  }
`
export {Container, Title, Btn }