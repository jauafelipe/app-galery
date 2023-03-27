import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 20px;
  background: #ffffff;
  text-align: center;
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  position: auto;
  .icon-login {
    margin: auto;
    font-size: 40px;
    border: solid 2px #000;
    border-radius: 50%;
  }
  h2 {
    margin-top: 10px;
    font-size: 20px;
  }
  form {
    margin-top: 10px;
    input {
      box-sizing: border-box;
      font-size: 20px;
      outline: none;
      border: none;
      border-bottom: solid #211d3a;
      margin-top: 10px;
    }
  }
  a {
    margin: 5px;
  }
`;
