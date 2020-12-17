import React from 'react';
import { StyleLink } from '../styles/button/styles';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  margin?: boolean;
}

const Button: React.FC<ButtonProps> = ({ href, margin = true, children }) => {
  return (
    <Link href={href}>
      <StyleLink margin={margin}>{children}</StyleLink>
    </Link>    
  );
}

export default Button;