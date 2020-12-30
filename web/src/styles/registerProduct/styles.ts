import { moveRightToLeft } from './../globlaAnimation';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #E5E5E5;
  height: 86%;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 50px;

    animation: ${moveRightToLeft} 1s;

    h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;

      color: #1B1D44;
      margin-left: 15px;
      margin-bottom: 15px;
    }

    .container-input {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      margin: 17px;

      label {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;

        color: #1B1D44;
      }

      input {
        background: #FFFFFF;
        border: 1px solid #666666;
        box-sizing: border-box;
        border-radius: 5px;
       
        width: 197px;
        height: 43px;
        margin-top: 7px;
      }
    }

    .subcontainer-input {
      display: flex;
    }

    button {
      background: #363981;
      border: 1px solid #C4C4C4;
      border-radius: 30px;

      width: 255px;
      height: 51px;

      font-size: 16px;


      color: #FFFFFF;
      margin-left: 15px;
      margin-top: 38px; 
    }

    #max-width-menu {
      width: 430px !important;
    }
  }
`;
