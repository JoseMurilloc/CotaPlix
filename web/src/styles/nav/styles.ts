import styled from 'styled-components';

interface NavigationProps {
  focus?: boolean;
}

export const Navigation = styled.ul<NavigationProps>`

  .title {
    background: #FCFCFC;
    border-radius: 20px 0px 0px 20px;
    
    width: 115%;
    height: 47px;

    a {
      font-weight: bold !important;
      font-size: 16px !important;
      line-height: 19px !important;

      letter-spacing: 0.015em !important;

      color: #1B1D44 !important;

    }
  }

  li {
  
    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 22px 0;
    /* background-color: red; */

    a {
      text-decoration: none;
      font-size: 16px;
      line-height: 19px;

      letter-spacing: 0.015em;

      color: #FFFFFF;
      margin-left: 10px;
    }
  }
`;

export const ListItem = styled.li`
  background: #FCFCFC;
  border-radius: 20px 0px 0px 20px;
  
  width: 113%;
  height: 47px;

  a {
    font-weight: bold !important;
    font-size: 16px !important;
    line-height: 19px !important;

    letter-spacing: 0.015em !important;

    color: #1B1D44 !important;

  }
`;