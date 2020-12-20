import { Container, Content, Background } from '../styles/register/styles'
import Input from '../components/input';
import Button from '../components/button';
import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import api from '../src/services/api';
import { useToast } from '../hooks/toast';

const Register: React.FC = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmed, setPasswordConfirmed] = useState('');
  const [name, setName] = useState('');
  
  const { addToast } = useToast();

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await api.post('/users', {
        email,
        password,
        name
      });

      addToast({
        type: 'sucess',
        title: 'Usuário cadastrado com sucesso!',
        description: 'Use suas credenciais para acessar!'
      });

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
            name="password"
            value={password_confirmed}
            onChange={e => setPasswordConfirmed(e.target.value)}  
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