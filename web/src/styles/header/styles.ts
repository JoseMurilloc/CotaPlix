import styled from 'styled-components';

export const Container = styled.div`
  height: 87px;
  width: 100%;

  background-color: #E5E5E5;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;


  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.015em;

    color: #000000;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 350px;

    div span {
      margin-right: 10px;
    }

    .setting {
      background: #C4C4C4;
      width: 47px;
      height: 47px;
      border: none;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .notification {
      background: linear-gradient(180deg, #6B68FB 0%, #363981 100%), #363981;
      box-shadow: 0px 1.55609px 1.55609px rgba(71, 78, 235, 0.5);
      border-radius: 20.1377px;

      width: 63.1px;
      height: 34.23px;

      font-size: 12.4487px;
      line-height: 15px;
      letter-spacing: 0.015em;

      color: #FFFFFF;

      display: flex;
      align-items: center;
      justify-content: center;

    }

    .profile {
      display: flex;
      align-items: center;
      color: #1B1D44;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.015em;

    }
  }

`;