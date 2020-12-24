import { Form } from '@unform/web';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Input from '../components/input';

import { 
  Container,
  Background,
  Content
} from '../styles/recoverPasswordUpdate/styles';

import recoverPassword from '../../public/assets/recoverPassword.svg';
import api from '../services/api';
import { useToast } from '../hooks/toast';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/router';

interface PasswordUpdate {
  token: string;
  password: string;
  password_confirmation: string;
}

const RecoverPassword: React.FC = () => {
  const { addToast } = useToast();
  const router = useRouter();

  async function handlePasswordUpdate(data: PasswordUpdate) {
    try {
      await api.put('/forgot_pasword', {
        password: data.password,
        token: data.token
      });
      
      addToast({
        type: 'sucess',
        title: 'Mudança de senha concluída'
      });

      router.push('/login')
      
    } catch {
      addToast({
        type: 'error',
        title: 'Error na tentativa de mudança de senha',
        description: 'Tente novamente ou verifique se token já está expirado ou está incorreto!'
      });
      return;
    }
  }

  return (
    <Container>
      <Content>
        <h1>Recupere sua senha</h1>
        <p>
          Logo após a confirmação correta do código enviado via e-mail você terá acesso liberado para aplicar sua nova senha.
        </p>
        
        <Form onSubmit={handlePasswordUpdate}>
          <Input 
            type="text"
            name="token"
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