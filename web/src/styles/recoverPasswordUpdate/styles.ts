import { moveRightToLeft } from './../globlaAnimation';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  width: 798px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 45px 90px;

  animation: ${moveRightToLeft} 1s;

  h1 {
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;
    letter-spacing: 0.015em;

    color: #363981;
  }

  p {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.015em;

    color: #1B1D46;

    width: 557px;
    height: 38px;
    margin-bottom: 30px;
    margin-top: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      /* margin-bottom: 30px; */
    }

    button {
      width: 189px;
      height: 48px;

      background: rgba(33, 38, 152, 0.8);
      border: 2px solid #6B68FB;
      box-sizing: border-box;
      border-radius: 5px;

      font-weight: bold;
      font-size: 16px;
      line-height: 19px;

      letter-spacing: 0.015em;
      color: #FFFFFF;
      
      margin-top: 30px;
    }
  }

`;

export const Background = styled.div`
  width: 562px;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    animation: ${moveRightToLeft} 1s;
  }

`;
