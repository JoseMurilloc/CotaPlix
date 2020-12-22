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
      width: 255px;
      height: 51px;

      background: #363981;
      border: 1px solid #C4C4C4;
      border-radius: 30px;

      font-weight: bold;
      font-size: 16px;
      line-height: 19px;

      letter-spacing: 0.015em;
      color: #FFFFFF;

      text-transform: uppercase;

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


`;
