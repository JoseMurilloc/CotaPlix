import { Navigation } from '../styles/nav/styles';

import list from '../../public/assets/list.svg';
import packageIcon from '../../public/assets/packageIcon.svg';
import products from '../../public/assets/products.svg';
import provider from '../../public/assets/provider.svg';
import help from '../../public/assets/help.svg';


const Nav: React.FC = () => {
  return (
    <Navigation>
      <li className="title">
        <a href="/">Seja bem-vindo</a>
      </li>
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
  );
}

export default Nav;