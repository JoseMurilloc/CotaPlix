import styled from 'styled-components';
import { moveRightToLeft } from './../globlaAnimation';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Background = styled.div`
  background: #6B68FB;
  width: 562px;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;


  div {
    animation: ${moveRightToLeft} 1s;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: #FFFFFF;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.015em;

      margin-bottom: 16px;
    }

    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.015em;
      margin-bottom: 7px;
  
      color: #FFFFFF;
    }
  }
`;

export const Content = styled.div`
  width: 798px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-top: 45px;

  form {

    animation: ${moveRightToLeft} 1s;


    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 40px;
      line-height: 47px;
      color: #363981;
      margin-bottom: 35px;
      font-weight: bold;
    }
   

    div {
      
      display: flex;
      align-items: center;
      width: 352px;
      margin-bottom: 50px;
      margin-top: 10px;
      
      a {
        font-size: 16px;
        line-height: 19px;
        color: #1B1D44;
        letter-spacing: 0.015em;
        text-decoration: none;
        transition: color 1s;

        &:hover {
          color: #41426C;
        }
      }
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
    }
  }
`;

