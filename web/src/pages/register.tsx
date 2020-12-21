import { Container, Content, Background } from '../styles/register/styles'
import Input from '../../src/components/input';
import Button from '../../src/components/button';
import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import api from '../../src/services/api';
import { useToast } from '../../src/hooks/toast';
import { useRouter } from 'next/router';

const Register: React.FC = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  
  const { addToast } = useToast();
  const router = useRouter();

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await api.post('/users', {
        email,
        password,
        name,
        password_confirmation
      });

      addToast({
        type: 'sucess',
        title: 'Usuário cadastrado com sucesso!',
        description: 'Use suas credenciais para acessar!'
      });

      router.push('/login');

    } catch {
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
        <form onSubmit={handleRegister}>
          <h1>Criar sua conta</h1>
          <Input 
            type="text"
            placeholder="Nome"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
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
          <Input 
            type="password"
            placeholder="Confirmar sua senha"
            name="password_confirmation"
            value={password_confirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}  
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
        </form>
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