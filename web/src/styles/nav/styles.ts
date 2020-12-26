import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface NavigationProps {
  focus?: boolean;
}


export const SideBar = styled(motion.nav)`
  height: 100vh;
  background: #363882;
  padding-left: 11px;
  width: 185px;
  /* padding: 19px 19px 0px 16px; */


  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
    padding: 9px;
    padding-top: 20px;


    h1 {
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.015em;
      color: #FFFFFF;
    }
  }

`;

export const Main = styled.div`
  height: 100vh;
  width: 100%;
`;


export const Navigation = styled.ul<NavigationProps>`

  li#title {
    background: #E5E5E5;
    border-radius: 20px 0px 0px 20px;
    
    width: 100%;
    height: 47px;

    a {
      font-weight: bold !important;
      font-size: 16px !important;
      line-height: 19px !important;

      letter-spacing: 0.015em !important;

      color: #1B1D44 !important;

    }
  }

  /* li:hover {
    background: #FCFCFC;
    border-radius: 20px 0px 0px 20px;
    
    width: 115%;
    height: 47px;
    padding: 5px;

    img {
      background: #000;
    }

    a {
      font-weight: bold !important;
      font-size: 16px !important;
      line-height: 19px !important;

      letter-spacing: 0.015em !important;

      color: #1B1D44 !important;

    }
  } */



  li {
  
    display: flex;
    justify-content: flex-start;
    align-items: center;

    /* padding: 22px 0; */
    width: 100%;
    height: 50px;
    margin: 22px 0;
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

const ListItem = css`
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