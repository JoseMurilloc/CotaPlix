import { 
  Container,
  SideBar,
  Main,
  Header
} from '../../styles/dashboard/styles';

import Nav from '../../components/nav';

import { VscSettings } from 'react-icons/vsc';
import { MdNotificationsActive } from 'react-icons/md';

import moreIcon from '../../../public/assets/moreIcon.svg';

import profile from '../../../public/assets/profile.svg';

const Dashboard: React.FC = () => {
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
      </Main>
    </Container>
  );
}

export default Dashboard;