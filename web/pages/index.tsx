import Link from 'next/link';
import Button from '../components/button';
import { 
  Container,
  ContainerFirst,
  ContainerAbout,
  ContainerFooter,
  StyleLink
} from '../styles/home/styles';

import womanWorksWithComputer from '../public/assets/womanWorksWithComputer.svg';
import faceLogo from '../public/assets/faceLogo.svg';

export default function Home() {

  return (
    <Container>
      <ContainerFirst>
        <header>
          <ul>
            <li>Contato</li>
            <li>Sobre nós</li>
            <li>Funcionalidades e Vantagens</li>
            <li>Ajuda</li>
          </ul>

          <section>
            <Link href="/login">Entrar</Link>
            <Button 
              href="/register"
              margin={false}
            >
              Registrar agora
            </Button>
          </section>
        </header>
        <main>
          <h1>Quick quote</h1>
          <p>Cotações fáceis e rápidas só na cotaplix, se aplique na cotaplix e seja livre de borocracias.</p>

          <div>
            <input type="text" placeholder="Digite seu email"/>
            <button>Entre gratuitamente</button>
          </div>

        </main>
      </ContainerFirst>
      <ContainerAbout>
        <div>
          <h1>Afinal o que é?</h1>
          <p>quick quote é um sistema web que organiza e automatiza suas cotações, fornecendo uma interface limpa e objetiva para os usuários do site, acesso totalmente livre ganhando mais agilidade, praticidade economizando tempo e dinheiro</p>
          <strong>Venha você também ter controle de suas cotações na palma da sua mão.</strong>
        </div>
        <img src={womanWorksWithComputer} alt="Logo image"/>
      </ContainerAbout>
      <ContainerFooter>
        <main>
          <h1>Aproveite essa oportunidade de transformar a sua empresa</h1>

          <p>Independente se sua empresa quer comprar ou vender, precisa de um sistema simples e inteligente para auxiliar no processo de cotação. Nós temos a melhor solução para empresas que querem diminuir custos e tempo gastos com cotação. Utilize gratuitamente!</p>

          <Link href="/register">
            <StyleLink>
              Cadastra-se
            </StyleLink>
          </Link>

        </main>
        <footer>
          <span></span>
          <span>Cotaplix © 2021 - Todos os direitos reservados</span>
          <div>
            <img src={faceLogo} alt="Face logo"/>
            <img src={faceLogo} alt="Face logo"/>
            <img src={faceLogo} alt="Face logo"/>
          </div>
        </footer>
      </ContainerFooter>
    </Container>
  )
}
