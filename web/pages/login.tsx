import { Container, Content, Background } from '../styles/login/styles'
import Input from '../components/input';
import Button from '../components/button';
import { motion } from 'framer-motion';

const Login: React.FC = () => {

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
        <form>
          <h1>Entrar</h1>
         
          <Input type="email" placeholder="Email"/>
          <Input type="password" placeholder="Senha"/>
          
          <div>
            <a href="/">Esqueci minha senha</a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Entrar
          </motion.button>
        </form>
      </Content>
    </Container>
  );
}

export default Login;