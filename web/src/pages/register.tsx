import { Container, Content, Background } from '../styles/register/styles'
import Input from '../../src/components/input';
import Button from '../../src/components/button';
import { motion } from 'framer-motion';
import api from '../../src/services/api';
import { useToast } from '../../src/hooks/toast';
import { useRouter } from 'next/router';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import { useRef } from 'react';
import getValidationErrors from '../utils/getValidationErrors';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}


const Register: React.FC = () => {
    
  const { addToast } = useToast();
  const router = useRouter();
  const formRef = useRef(null);

  async function handleRegister(data: RegisterFormData) {
    try {

      formRef.current?.setErrors({});   
  
      const scheme = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
        password: Yup.string().required('Senha é obrigatória'),
        password_confirmation: Yup.string().required('Confirmação de senha é obrigatória'),
        name: Yup.string().required('Nome é obrigatório')
      });
  
      await scheme.validate(data, {
        abortEarly: false
      })  

      await api.post('/users', data);

      addToast({
        type: 'sucess',
        title: 'Usuário cadastrado com sucesso!',
        description: 'Use suas credenciais para acessar!'
      });

      router.push('/login');

    } catch(err) {

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
  
        formRef.current?.setErrors(errors) 
        
        return;
      }

      addToast({
        type: 'error',
        title: 'Error ao tentar se cadastrar!',
        description: 'Mude os dados e tente novamente, por favor!'
      });

      return;
    }
  }

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleRegister}>
          <h1>Criar sua conta</h1>
          <Input 
            type="text"
            placeholder="Nome"
            name="name"
          />
          <Input 
            type="email"
            placeholder="Email"
            name="email"
          />
          <Input 
            type="password"
            placeholder="Senha"
            name="password"
          />
          <Input 
            type="password"
            placeholder="Confirmar sua senha"
            name="password_confirmation"
          />

          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales">Eu concordo com os termos de privacidade</label>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Finalizar Cadastro
          </motion.button>
        </Form>
      </Content>
      <Background>
        <div>
          <h1>Olá, amigo!</h1>
          <p>Possuí conta? Clique abaixo</p>
          <p>Você será direcionado a pagina de Login</p>

          <Button href="/login">
            Entrar
          </Button>
        </div>
      </Background>
    </Container>
  );
}

export default Register;