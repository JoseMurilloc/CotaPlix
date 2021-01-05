import Router from 'next/router';
import Header from '../../components/header';
import Nav from '../../components/nav';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import RegisterProduct from '../../components/registerProduct';
import api from '../../services/api';

import { 
  Container,
  Main
} from '../../styles/dashRegisterProduct/styles';

const DashRegisterProduct: React.FC = ({ token }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container>
      <Nav />
      <Main>
        <Header />
        <RegisterProduct token={token} />
      </Main>
    </Container>
  );
}

interface IGetPros {
  user: {
    id: string;
    email: string;
    name: string;
  },
  token: string;
}

interface User {
  id: string;
  email: string;
  name: string;
}


export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
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

    const user = response.data as User;
    
    // console.log(ctx.req.headers.cookie)
    return {
      props: {
        user,
        token: cookieCotaPlix
      }
    }
  } catch {
    return handleRedirection();
  }
}

export default DashRegisterProduct;