import { MdNotificationsActive } from 'react-icons/md';
import { VscSettings } from 'react-icons/vsc';
import profile from '../../public/assets/profile.svg'; 

import { Container  } from '../styles/header/styles';

const Header: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
}

export default Header;