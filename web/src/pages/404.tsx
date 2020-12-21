import React from 'react';

import { Container, StyleLink } from '../styles/error/styles';

import error from '../../public/assets/error.svg';
import Image from 'next/image';
import Link from 'next/link';

const PageNotFound: React.FC = () => {
  return (
    <Container>
     <div className="subcontainer">
      <Image width="400px" height="400px" src={error} />
      <h1>uh-oh, página não encontrada</h1>
      <Link href="/">
        <StyleLink>
          volto para casa
        </StyleLink>
      </Link>
     </div>
    </Container>
  );
}

export default PageNotFound;