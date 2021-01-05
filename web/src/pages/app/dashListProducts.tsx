import React from 'react';
import Header from '../../components/header';
import Nav from '../../components/nav';

import { Container, Main } from '../../styles/dashRegisterProduct/styles';

const DashListProducts: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Main>
        <Header />
        {/* Aqui é onde estara component que irá lista os produtos */}
      </Main>
    </Container>
  );
}

export default DashListProducts;