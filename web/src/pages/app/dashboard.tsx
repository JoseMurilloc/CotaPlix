import { 
  Container,
  Main,
} from '../../styles/dashboard/styles';

import { GetServerSideProps } from 'next';
import Router from "next/router";

import Nav from '../../components/nav';
import HomeDash from '../../components/homeDash';
import Header from '../../components/header';

import api from '../../services/api';

function Dashboard() {
 
  return (
    <Container>
      <Nav/>
      <Main>
        <Header />
        <HomeDash />
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
        user: response.data,
      }
    }
  } catch {
    return handleRedirection();
  }
}

export default Dashboard;