import { Form } from '@unform/web';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Input from '../components/input';

import { 
  Container,
  Background,
  Content
} from '../styles/recoverPassword/styles';

import recoverPassword from '../../public/assets/recoverPassword.svg';
import api from '../services/api';
import { useToast } from '../hooks/toast';
import { useRouter } from 'next/router';

interface SendMail {
  email: string;
}

const RecoverPassword: React.FC = () => {

  const { addToast } = useToast();
  const router = useRouter(); 
  const [disabledStatus, setDisabledStatus] = useState(false);

  // const buttonRef = useRef<HTMLButtonElement>()


  async function handleSendEmail(data: SendMail) {
    try {
      setDisabledStatus(true)
      await api.post('/forgot_pasword', data)

      // console.log(buttonRef.current);

      addToast({
        type: 'sucess',
        title: 'Recuperação de senha',
        description: 'Verifique em sua caixa de entrafa de email'
      });      
      router.push('/recoverPasswordUpdate');
    } catch(error) {
      addToast({
        type: 'error',
        title: 'Recuperação de senha',
        description: 'O email informado não é valído'
      });

      return;
    }  finally {
      setDisabledStatus(false)
    }
  }

  return (
    <Container>
      <Content>
        <h1>Recupere sua senha</h1>
        <p>
          No espaço em branco abaixo digite seu e-mail, logo em seguida enviaremos um código para você ter acesso a sua nova senha.
        </p>
        
        <Form onSubmit={handleSendEmail}>
          <Input 
            type="email"
            name="email"
            placeholder="E-mail"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            disabled={disabledStatus}
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