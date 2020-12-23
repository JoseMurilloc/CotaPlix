import { 
  Container,
  SideBar,
  Navigation,
  ListItem,
  Main,
  Header
} from '../../styles/dashboard/styles';

import { VscSettings } from 'react-icons/vsc';
import { MdNotificationsActive } from 'react-icons/md';

import moreIcon from '../../../public/assets/moreIcon.svg';
import list from '../../../public/assets/list.svg';
import packageIcon from '../../../public/assets/packageIcon.svg';
import products from '../../../public/assets/products.svg';
import provider from '../../../public/assets/provider.svg';
import help from '../../../public/assets/help.svg';

import profile from '../../../public/assets/profile.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <div>
          <h1>quick quock</h1>
          <img src={moreIcon} alt="More Icon"/>
        </div>
        <Navigation>
          <ListItem>
            <a href="/">Seja bem-vindo</a>
          </ListItem>
          <li>
            <img src={packageIcon} alt="Logo Package"/>
            <a href="/">Cotações</a>
          </li>
          <li>
            <img src={products} alt="Logo Package"/>
            <a href="/">Produtos</a>
          </li>
          <li>
            <img src={list} alt="Logo Package"/>
            <a href="/">Lista</a>
          </li>
          <li>
            <img src={provider} alt="Logo Package"/>
            <a href="/">Forcedores</a>
          </li>
          <li>
            <img src={help} alt="Logo Package"/>
            <a href="/">Ajuda</a>
          </li>
        </Navigation>
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
      </Main>
    </Container>
  );
}

export default Dashboard;