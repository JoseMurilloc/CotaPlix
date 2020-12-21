import { Container, Content, Background } from '../styles/login/styles'
import { useAuth } from '../../src/hooks/auth';
import { motion } from 'framer-motion';

import { Form} from '@unform/web'

import { useRouter } from 'next/router';
import Input from '../../src/components/input';
import Button from '../../src/components/button';
import { useToast } from '../../src/hooks/toast';
import { useRef } from 'react';

import * as Yup from 'yup';
import getValidationErrors from '../utils/getValidationErrors';

interface SiginFormData {
  email: string;
  password: string;
}


const Login: React.FC = () => {
    
  const { sigIn } = useAuth();
  const { addToast } = useToast();
  
  const router = useRouter();
  const formRef = useRef(null);

  async function handleLogin(data: SiginFormData) {
    try {

      formRef.current?.setErrors({});   
  
      const scheme = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
        password: Yup.string().required('Senha é obrigatória'),
      });
  
      await scheme.validate(data, {
        abortEarly: false
      })
  
      await sigIn(data);

      addToast({
        type: 'sucess',
        title: 'Autenticação feita com sucesso',
        description: 'Bem vindo, ao dashboard'
      });

      router.push('/app/dashboard')
    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
  
        formRef.current?.setErrors(errors) 
        
        return;
       }

      addToast({
        type: 'error',
        title: 'Error na autenticação',
        description: 'Ocorreu um erro ao fazer o login, cheque as cresdenciais.'
      });
    }
  }

  return (
    <Container>
      <Background>
        <div>
          <h1>Olá, amigo!</h1>
          <p>Não possuí uma conta ? Clique aqui logo abaixo</p>
          <p>Você será direcionado a pagina de cadastro</p>

          <Button href="/register">
            Cadastro
          </Button>
        </div>
      </Background>
      <Content>
        <Form ref={formRef}  onSubmit={handleLogin}>
          <h1>Entrar</h1>
         
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
          
          <div>
            <a href="/">Esqueci minha senha</a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Entrar
          </motion.button>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;