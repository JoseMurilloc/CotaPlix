import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  .subcontainer {

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 737px;
    height: 458px;
    
    background: #c4c4c44b;
    border-radius: 10px;
  }

  h1 {
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #6B68FB;

  }
`;

export const StyleLink = styled.a`

  cursor: pointer;

  width: 255px;
  height: 51px;
  
  background: #363981;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
`;