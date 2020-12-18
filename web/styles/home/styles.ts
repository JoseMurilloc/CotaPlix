import { motion } from 'framer-motion';
import styled from 'styled-components';
import backgroundHeader from '../../public/assets/BackgroundHeader.svg';

export const Container = styled(motion.div)`
  height: 100%;
`;

export const ContainerFirst = styled.div`
  height: 100vh;

  background: url(${backgroundHeader}) no-repeat;
  background-size: cover;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 35px;
    height: 75px;
    /* background-color: palegreen; */

    padding-left: 193px;
    padding-right: 36px; 

    ul {
      display: flex;

      li {
        margin-right: 30px;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.015em;
        color: #1B1D44;
      }
    }
    
    section {
      
      display: flex;
      align-items: baseline;
      justify-content: space-between;

      a {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.015em;
        color: #1B1D44;
        text-decoration: none;

        & + a {
          background: #6B68FB;
          border-radius: 23px;
          width: 163px;
          height: 44px;
          color: #fff;
          margin-left: 30px;
        }
      }
    } 
  }

  main {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    height: 80vh;
    /* background-color: red; */

    h1 {
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      color: #212698;
      margin-bottom: 5px;
    }

    p {
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      width: 479px;
      height: 84px;
      color: #212698;
      margin-bottom: 26px;
    }

    div {
      input {
        width: 295px;
        height: 55px;

        background: #FFFFFF;
        border: 1px solid #C4C4C4 !important;
        border: none;
        border-radius: 26px;
        padding: 0 30px;
        margin-right: 160px;

        &::placeholder {
          font-size: 15px;
          line-height: 17px;
          letter-spacing: 0.015em;

          color: #000000;

          opacity: 0.5;
        } 
      }

      button {
        width: 224px;
        height: 55px;
        
        position: absolute;
        left: 705px;
        top: 390px;

        background: #212698;
        border: none;
        border-radius: 27px;

        font-size: 15px;
        line-height: 17px;
        letter-spacing: 0.015em;

        color: #FFFFFF;
      }
    }
  }
`;

export const ContainerAbout = styled.div`
  height: 100vh;
  background-color: #363981;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;


  div {
    h1 {
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: 0.015em;
      margin-bottom: 16px;

      color: #FFFFFF;
    }

    p {
      font-size: 24px;
      line-height: 28px;
      text-align: justify;
      letter-spacing: 0.015em;
      margin-bottom: 16px;
      width: 699px;
      height: 140px;

      color: #FFFFFF;
    }

    strong {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      text-align: justify;
      letter-spacing: 0.015em;

      color: #fff;
      width: 400px;
      height: 56px;
    }
  }
`;

export const ContainerFooter = styled.div`
 height: 100vh;
 background: #F3F4FE;

 display: flex;
 flex-direction: column;
 align-items: center;


 main {
  flex: 1;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding: 0px 110px;
  padding-top: 110px;
  padding-bottom: 165px;

  /* background-color: blue; */
  h1 {
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;
    letter-spacing: 0.015em;
    margin-bottom: 16px;

    color: #474EEB;
  }

  p {
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.015em;
    color: #1B1D44;
    width: 1112px;
    height: 112px;
  }
 }


 footer {
  flex: 1;
  /* background-color: red; */
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 30px; 

  > span {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background: #C4C4C4;
    margin-left: 21px;
  }

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.015em;

    color: #1B1D44;

  }

  div img {
    padding-right: 10px;
  }
 } 
`;

export const StyleLink =  styled.a`

  cursor: pointer;
 
  background: #6B68FB;
  border-radius: 50px;
  width: 379px;
  height: 82px;

  font-size: 16px;
  line-height: 19px;

  display: flex;
  justify-content: center;
  align-items: center;

  letter-spacing: 0.015em;
  text-transform: uppercase;

  color: #FFFFFF;
`;

export const ContainerVideo = styled.div`
  height: 100vh;
  background-color: #FBFBFD;

  display: flex;
  /* justify-content: space-between; */
  align-items: flex-start;

  padding: 65px 80px;

  div {
    h1 {
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: 0.015em;
      margin-bottom: 5px;

      color: #1B1D44;
    }

    p {
      width: 622px;
      height: 84px;
      font-size: 24px;
      line-height: 28px;
      text-align: justify;
      letter-spacing: 0.015em;

      color: #1B1D44;
    }
  }

  iframe {
    margin-top: 220px;
    margin-left: 90px;
  }
`;

export const Containerfunctionality = styled.div`
  height: 100vh;

  display: grid; 
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  grid-gap: 40px;
  padding: 0 90px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.015em;

      margin-top: 27px;
      color: #000000;
    }

    p {
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.015em;
      width: 347px;
      height: 57px;
      margin-top: 16px;
      color: #1B1D44;
    }
  }
`;