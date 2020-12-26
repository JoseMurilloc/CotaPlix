import Router from 'next/router';
import React from 'react';
import Header from '../../components/header';
import Nav from '../../components/nav';

import { GetServerSideProps } from 'next';
import RegisterProduct from '../../components/registerProduct';
import api from '../../services/api';

import { 
  Container,
  Main
} from '../../styles/dashRegisterProduct/styles';

const DashRegisterProduct: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Main>
        <Header />
        <RegisterProduct />
      </Main>
    </Container>
  );
}

interface User {
  id: string;
  email: string;
  name: string;
}


export const getServerSideProps: GetServerSideProps<User> = async (ctx: any) => {
  const cookie = await ctx.req.headers.cookie as string;

  const handleRedirection = () => 
    typeof window !== "undefined"
    ? Router.push("/login")
    : ctx.res.writeHead(302, { Location: "/login" }).end();

  
  try {
    const cookieCotaPlix = cookie.replace('CotaPlixTokenUser=', '');
  
    const response = await api.get<User>('/user', {
      headers: {
        Authorization: `Bearer ${cookieCotaPlix}`
      }
    })
    
    // console.log(ctx.req.headers.cookie)
    return {
      props: {
        user: response.data
      }
    }
  } catch {
    return handleRedirection();
  }
}

export default DashRegisterProduct;