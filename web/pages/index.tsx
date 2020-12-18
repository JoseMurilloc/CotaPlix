import Link from 'next/link';
import Image from 'next/image';

import ReactPlayer from 'react-player';
import Button from '../components/button';

import { 
  Container,
  ContainerFirst,
  ContainerAbout,
  ContainerFooter,
  StyleLink,
  ContainerVideo,
  Containerfunctionality
} from '../styles/home/styles';

import womanWorksWithComputer from '../public/assets/womanWorksWithComputer.svg';
import faceLogo from '../public/assets/faceLogo.svg';
import internetIcon from '../public/assets/InternetIcon.svg';
import offerIcon from '../public/assets/offerIcon.svg';
import statisticsIcon from '../public/assets/statisticsIcon.svg';
import managerIcon from '../public/assets/managerIcon.svg';
import purchaseIcon from '../public/assets/purchaseIcon.svg';
import insuranceIcon from '../public/assets/insuranceIcon.svg';

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
        <Image 
          width="750"
          height="750"
          src={womanWorksWithComputer}
          alt="Logo image"
        />
      </ContainerAbout>
      <Containerfunctionality>
        <div>
          <Image width="80" height="80" src={internetIcon} alt="Internet Icon"/>
          <h1>A qualquer luga e qualquer hora</h1>
          <p>Com nosso sistema de cotação de fácil uso fornecemos a praticidade podendo realizar suas cotações a qualquer lugar.</p>
        </div>
        <div>
          <Image width="80" height="80" src={purchaseIcon} alt="Internet Icon"/>
          <h1>Compras e vendas</h1>
          <p>Compras e vendas seguras a qualquer momento do dia, Acompanhamento em tempo real de suas ofertas e cotações.</p>
        </div>
        <div>
          <Image width="80" height="80" src={statisticsIcon} alt="Static Icon"/>
          <h1>Estatísticas</h1>
          <p>O quick quotefornece todos as cotações e listas que foram feitas durante o mês.</p>
        </div>
        
        <div>
          <Image width="80" height="80" src={insuranceIcon} alt="Internet Icon"/>
          <h1>Seguro e garantido</h1>
          <p>Com nosso sistema de cotação de fácil uso fornecemos a praticidade podendo realizar suas cotações a qualquer lugar.</p>
        </div>  
        <div>
          <Image width="80" height="80" src={managerIcon} alt="Internet Icon"/>
          <h1>Gerênciamento</h1>
          <p>Gerencie os preços desejados pelas mercadorias escolhidas, fazendo assim melhor controle financeiro</p>
        </div>
        <div>
          <Image width="80" height="80" src={offerIcon} alt="Internet Icon"/>
          <h1>Crie ofertas</h1>
          <p>Crie qualquer tipo de oferta e mande para seus clientes a qualquer hora.</p>
        </div>
      </Containerfunctionality>
      <ContainerVideo>
        <div>
          <h1>Demonstração</h1>
          <p>O vídeo a seguir mostrar um pouco do nosso funcionamento do site, mostrando a facilidade de uso e práticidade das cotações.</p>
        </div>
        <ReactPlayer 
          width="415px"
          height="255px"
          url="https://www.youtube.com/watch?v=jLlOnsIapdQ"
        />
      </ContainerVideo>
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
          <p>Cotaplix © 2021 - Todos os direitos reservados</p>
          <div>
            <Image width="44" height="44" src={faceLogo} alt="Face logo"/>
            <Image width="44" height="44" src={faceLogo} alt="Face logo"/>
            <Image width="44" height="44" src={faceLogo} alt="Face logo"/>
          </div>
        </footer>
      </ContainerFooter>
    </Container>
  )
}
