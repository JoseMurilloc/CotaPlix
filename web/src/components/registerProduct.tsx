import { Form } from '@unform/web';
import { Container } from '../styles/registerProduct/styles';
import Input from './input';

const RegisterProduct: React.FC = () => {

  async function handleRegisterProduct(data) {
    console.log(data);
  }

  return (
    <Container>

      <Form onSubmit={handleRegisterProduct}>
        <h1>Cadastramento de produtos</h1>
        
        <div className="container-input">
          <label htmlFor="code_bar">Código *</label>
          <Input type="text" name="code_bar" placeholder="" />
        </div>

        <div className="container-input">
          <label htmlFor="description">Descrição *</label>
          <Input type="text" name="description" placeholder="" />
        </div>

        <div className="subcontainer-input">
          <div className="container-input">
            <label htmlFor="price">Preço *</label>
            <Input type="text" name="price" placeholder="" />
          </div>

          <div className="container-input">
            <label htmlFor="unity">Unidade *</label>
            <Input type="text" name="unity" placeholder="" />
          </div>
        </div>

        <button type="submit">
          Cadastrar produto
        </button>

      </Form>
    </Container>
  )
}

export default RegisterProduct;