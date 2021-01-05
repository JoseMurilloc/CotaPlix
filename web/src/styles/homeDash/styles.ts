import { moveRightToLeft } from './../globlaAnimation';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 40px;
  background-color: #E5E5E5;
  height: 86.5vh;

  h1 {
    animation: ${moveRightToLeft} 1s;

    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.015em;
    margin-bottom: 16px;

    color: #161616;
  }

  #container {
    animation: ${moveRightToLeft} 1s;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    div {
      display: flex;
      align-items: center;
      padding: 15px;  
    }
  }

  #register-product, #register-list, #open-event {
    cursor: pointer;
    border-radius: 9px;
    width: 195px;
    height: 134px;
    margin-right: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin-top: 14px;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.015em;

      color: #000;
    }
  }

  .last {
    margin-top: 55px;
  }

  #event-last {
    width: 195px;
    height: 134px;

    display: flex;
    align-items: center;
    justify-content: center;
    background: #3B1993;
    border-radius: 9px;
    margin-right: 20px;


  }

  #register-product {
    background: #212698;

    p {
      color: #fff;
    }
  }

  #register-list {
    background: #FECE2F;
  }

  #open-event {
    background: #68E0FB;
  }
`;