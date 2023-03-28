import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: -20px 20px #211d3a;

  color: #fff;
  border-radius: 20px;
  background: rgb(8, 255, 157);
  background: linear-gradient(
    169deg,
    rgba(8, 255, 157, 1) 0%,
    rgba(99, 26, 162, 1) 100%
  );
  text-align: center;
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  position: auto;
  border: solid 1px;
  .icon-login {
    margin: 4px auto;
    font-size: 80px;
    border: solid 2px #ffffff;
    border-radius: 50%;
  }
  h2 {
    margin-top: 10px;
    font-size: 28px;
  }
  form {
    margin-top: 10px;
    input {
      color: #fff;
      background: none;
      box-sizing: border-box;
      font-size: 20px;
      outline: none;
      border: none;
      border-bottom: solid #211d3a;
      margin-top: 10px;
      transition: all 200ms;

      &:hover {
        transition: all 200ms;
        background-color: rgb(0, 0, 0, 0.3);
      }
    }
    .remember-me {
      margin-left: 20px;
      display: flex;
      align-items: center;

      input[type='checkbox'] {

      }
      p {
        font-size: 15px;
        margin-left: 2px;
        margin-top: 10px;
      }
    }
  }

  a {
    color: #42ffb3;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
