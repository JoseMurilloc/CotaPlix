import { Form } from '@unform/web';
import { motion } from 'framer-motion';
import React from 'react';
import Input from '../components/input';

import { 
  Container,
  Background,
  Content
} from '../styles/recoverPassword/styles';

import recoverPassword from '../../public/assets/recoverPassword.svg';


const RecoverPassword: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Recupere sua senha</h1>
        <p>
          No espaço em branco abaixo digite seu e-mail, logo em seguida enviaremos um código para você ter acesso a sua nova senha.
        </p>
        
        <Form onSubmit={() => console.log('Submit')}>
          <Input 
            type="email"
            name="email"
            placeholder="E-mail"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Prosseguir  
          </motion.button>
        </Form>

      </Content>
      <Background>
        <img src={recoverPassword} alt="Background recover"/>
      </Background>
    </Container>
  )
}

export default RecoverPassword;