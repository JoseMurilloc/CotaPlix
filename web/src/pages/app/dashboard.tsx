import { 
  Container,
  SideBar,
  Main,
  Header,
  Content
} from '../../styles/dashboard/styles';

import Router from "next/router";

import Nav from '../../components/nav';

import { VscSettings } from 'react-icons/vsc';
import { MdNotificationsActive } from 'react-icons/md';

import moreIcon from '../../../public/assets/moreIcon.svg';
import moreIconBlack from '../../../public/assets/moreIconBlack.svg';
import profile from '../../../public/assets/profile.svg';
import listBlack from '../../../public/assets/listBlack.svg';
import packageIconBlack from '../../../public/assets/packageIconBlack.svg';
import { Context } from 'vm';
import api from '../../services/api';
// import Redirect from '../../components/redirect';

function Dashboard() {
  
  return (
    <Container>
      <SideBar>
        <div>
          <h1>quick quock</h1>
          <img src={moreIcon} alt="More Icon"/>
        </div>
        <Nav/>
      </SideBar>
      <Main style={{ backgroundColor: 'white' }}>
        <Header>
          <span></span>
          <h1>quick quote</h1>

          <section>
            <div className="setting">
              <VscSettings size={25} />
            </div>
            <div className="notification">
              15
              <MdNotificationsActive size={25} color="#fff"/>
            </div>
            <div className="profile">
              <span>Geissy Maysla</span>
              <img src={profile} alt="Profile"/>
            </div>
          </section>
        </Header>

        <Content>
          <h1>Funcionalidades mais recorrentes</h1>

          <div id="container">
            <div id="register-product">
              <img src={moreIconBlack} alt="More"/>
              <p>Cadastrar Produto</p>
            </div>

            <div id="register-list">
              <img src={listBlack} alt="More"/>
              <p>Cadastrar lista</p>
            </div>

            <div id="open-event">
              <img src={packageIconBlack} alt="More"/>
              <p>Abrir cotação</p>
            </div>
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

Dashboard.getInitialProps = async (ctx: Context) => {
  const cookie = ctx.req.headers.cookie as string;
  console.log(cookie)

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


  // console.log(response.data)
};

export default Dashboard;