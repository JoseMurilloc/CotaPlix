import { Container, Content, Background } from '../styles/register/styles'
import Input from '../components/input';
import Button from '../components/button';
import { motion } from 'framer-motion';

const Register: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <h1>Criar sua conta</h1>
          <Input type="text" placeholder="Nome"/>
          <Input type="text" placeholder="Email"/>
          <Input type="text" placeholder="Senha"/>
          <Input type="text" placeholder="Confirmar sua senha"/>

          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales">Eu concordo com os termos de privacidade</label>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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