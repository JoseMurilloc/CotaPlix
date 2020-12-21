import { Container, Content, Background } from '../styles/login/styles'
import { FormEvent, useState } from 'react';
import { useAuth } from '../../src/hooks/auth';
import { motion } from 'framer-motion';

import { useRouter } from 'next/router';
import Input from '../../src/components/input';
import Button from '../../src/components/button';
import { useToast } from '../../src/hooks/toast';

import * as Yup from 'yup';


// interface SiginFormData {
//   email: string;
//   password: string;
// }

const Login: React.FC = () => {
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { sigIn } = useAuth();
  const { addToast } = useToast();
  
  const router = useRouter();

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const credentials = { email, password }


    const scheme = Yup.object().shape({
      email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
      password: Yup.string().required('Senha é obrigatória'),
    });

    const isValid = await scheme.isValid(credentials);
    
    if (isValid) {
      const toastStatus = await sigIn(credentials);

      switch (toastStatus) {
        case true: {
          addToast({
            type: 'sucess',
            title: 'Autenticação concluida com sucesso',
            description: 'Você está logado na aplicação!'
          });

          router.push('/app/dashboard')
          break;
        }
        case false: 
          addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description: 'Suas credenciais estão incorretas, tente novamente!'
          });
          break;
        default:
          return;
      }
    } else {
      addToast({
        type: 'error',
        title: 'Yop error',
        description: 'Formulario com dados errados ou sem os mesmo!'
      });

      try {
        await scheme.validate(credentials, {
          abortEarly: false
        });
      } catch(err) {
        if (err instanceof Yup.ValidationError) {
          console.log(err)
          return;
         }
      }
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
        <form onSubmit={handleLogin}>
          <h1>Entrar</h1>
         
          <Input 
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            type="password"
            placeholder="Senha"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
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
        </form>
      </Content>
    </Container>
  );
}

export default Login;