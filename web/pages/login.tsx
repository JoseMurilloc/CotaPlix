import { Container, Content, Background } from '../styles/login/styles'
import Input from '../components/input';
import Button from '../components/button';
import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import api from '../src/services/api';
import Router from 'next/router';
import { useAuth } from '../hooks/auth';

const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { sigIn } = useAuth();

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const credentials = { email, password }
      sigIn(credentials)
      Router.push('/app/dashboard')
    } catch(error) {
      alert(error)
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