import styled from 'styled-components';

export const Container = styled.input`
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
  
  width: 352px;
  height: 51px;
  padding: 0 20px;

  & + input {
    margin-top: 13px;
  }

  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.015em;
  color: #000000;
  opacity: 0.5;

  &::placeholder {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.015em;
    color: #000000;
    opacity: 0.5;
  }
`;
