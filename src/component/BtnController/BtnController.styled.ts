import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
`
const Titlte = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
  text-align: center;
  font-size: 24px;
  color: #B04759;
`
const BtnContianer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`
const Button = styled.button`
  width: 160px;
  padding: 10px 30px;
  background-color: #E76161;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  font-size: 18px;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1), color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover{
    background-color: #B04759;
    color: #F99B7D;
  }
`
export {Container, Titlte, BtnContianer, Button}