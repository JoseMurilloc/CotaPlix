import React from 'react';

import { Container } from '../styles/homeDash/styles';

import products from '../../public/assets/products.svg';
import listBlack from '../../public/assets/listBlack.svg';
import packageIconBlack from '../../public/assets/packageIconBlack.svg';
import packageWhite from '../../public/assets/packageWhite.svg';
import { motion } from 'framer-motion';
import Router from 'next/router';

const HomeDash: React.FC = () => {
  return (
    <Container>
      <div id="container">
        <h1>Funcionalidades mais recorrentes</h1>
        <div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="register-product"
            onClick={() => Router.push('/app/dashRegisterProduct')}
          >
            <img src={products} alt="More"/>
            <p>Cadastrar Produto</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="register-list"
          >
            <img src={listBlack} alt="More"/>
            <p>Cadastrar lista</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="open-event"
          >
            <img src={packageIconBlack} alt="More"/>
            <p>Abrir cotação</p>
          </motion.div>
          
        </div>
      </div>

      <div id="container">
        <h1 className="last">Contações anteriores</h1>
        <div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="event-last"
          >
            <img src={packageWhite} alt="More"/>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="event-last"
          >
            <img src={packageWhite} alt="More"/>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="event-last"
          >
            <img src={packageWhite} alt="More"/>
          </motion.div>
          
        </div>
      </div>
    </Container>
  );
}

export default HomeDash;