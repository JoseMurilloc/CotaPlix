import { Form } from '@unform/web';
import { motion } from 'framer-motion';
import React from 'react';
import Input from '../components/input';

import { 
  Container,
  Background,
  Content
} from '../styles/recoverPasswordUpdate/styles';

import recoverPassword from '../../public/assets/recoverPassword.svg';


const RecoverPassword: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Recupere sua senha</h1>
        <p>
          Logo após a confirmação correta do código enviado via e-mail você terá acesso liberado para aplicar sua nova senha.
        </p>
        
        <Form onSubmit={() => console.log('Submit')}>
          <Input 
            type="text"
            name="code_update"
            placeholder="Digite o seu codigo aqui..."
          />

          <Input 
            type="password"
            name="password"
            placeholder="Senha"
          />


          <Input 
            type="password"
            name="password_confirmation"
            placeholder="Confirme sua senha"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Redefinir senha  
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