import { upBoxOptions } from './../globlaAnimation';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #E5E5E5;

  display: flex;
  
`;

export const Main = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  /* background-color: red; */
  padding: 0 40px;

  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.015em;
    margin-bottom: 16px;

    color: #161616;
  }

  #container {
    display: flex;
    align-items: center;
    padding: 15px;
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

    color: #161616;
  }
  }

  #register-product {
    background: rgba(107, 104, 251, 0.5);
  }

  #register-list {
    background: #FFF7AE;
  }

  #open-event {
    background: rgba(104, 224, 251, 0.5);
  }
`;