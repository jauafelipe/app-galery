import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  background-color: rgb(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 14px;
  margin: 10px 0 10px 0;
  padding: 5px;
  border: solid 1px #211d3a;
  border-radius: 5px;
  transition: all 400ms;
  &:hover {
    transition: all 400ms;
    border: solid 1px #fcfcfc;

    color: #fff;
    background-color: rgb(0, 0, 0, 0.5);
  }
`;
