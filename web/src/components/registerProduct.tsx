import { Form } from '@unform/web';
import { useToast } from '../hooks/toast';
import api from '../services/api';
import { Container } from '../styles/registerProduct/styles';
import Input from './input';

import * as Yup from 'yup';
import { useRef } from 'react';
import getValidationErrors from '../utils/getValidationErrors';

interface ProductProps {
  description: string;
  price: number;
  code_bar: string;
  unity: number;
}

interface RegisterProductProps {
  token: string;
} 

const RegisterProduct: React.FC<RegisterProductProps> = ({
  token
}) => {

  const { addToast } = useToast()
  const formRef = useRef(null);

  async function handleRegisterProduct(data: ProductProps) {
    try {

      formRef.current?.setErrors({});   


      const scheme = Yup.object().shape({
        description: Yup.string().required('Descrição obrigatória'),
        price: Yup.string().required('Preço é Obrigatorio'),
        code_bar: Yup.string().required('O código de barra é obrigatório'),
        unity: Yup.string().required('Unidade é um campo obrigatório')
      })

      await scheme.validate(data, {
        abortEarly: false
      })
  

      await api.post('/products', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      addToast({
        type: 'sucess',
        title: 'Produto cadastrado com sucesso',
      })
      
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
  
        formRef.current?.setErrors(errors) 
        
        return;
      }
      addToast({
        type: 'error',
        title: 'Error ao cadastrar produto',
        description: 'Erro na tentativa de cadastrar produto'
      })
    }
  }

  return (
    <Container>

      <Form ref={formRef} onSubmit={handleRegisterProduct}>
        <h1>Cadastramento de produtos</h1>
        
        <div className="container-input">
          <label htmlFor="code_bar">Código *</label>
          <Input type="text" name="code_bar" placeholder="" />
        </div>

        <div className="container-input">
          <label htmlFor="description">Descrição *</label>
          <Input id="max-width-menu" type="text" name="description" placeholder="" />
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