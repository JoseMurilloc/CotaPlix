import { 
  Container,
  Main,
  Content
} from '../../styles/dashboard/styles';

import Router from "next/router";

import Nav from '../../components/nav';

import moreIconBlack from '../../../public/assets/moreIconBlack.svg';
import listBlack from '../../../public/assets/listBlack.svg';
import packageIconBlack from '../../../public/assets/packageIconBlack.svg';
import { Context } from 'vm';
import api from '../../services/api';
import Header from '../../components/header';
import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
// import Redirect from '../../components/redirect';

function Dashboard() {
  
  return (
    <Container>
      <Nav/>
      <Main>
        <Header />
        <Content style={{ backgroundColor: 'white', height: '86.5vh' }}>
          <h1>Funcionalidades mais recorrentes</h1>

          <div id="container">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              id="register-product"
            >
              <img src={moreIconBlack} alt="More"/>
              <p>Cadastrar Produto</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              id="register-list"
            >
              <img src={listBlack} alt="More"/>
              <p>Cadastrar lista</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              id="open-event"
            >
              <img src={packageIconBlack} alt="More"/>
              <p>Abrir cotação</p>
            </motion.div>
          </div>
        </Content>
      </Main>
    </Container>
  );
}

interface User {
  id: string;
  email: string;
  name: string;
}

export const getServerSideProps: GetServerSideProps<User> = async (ctx) => {
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

export default Dashboard;