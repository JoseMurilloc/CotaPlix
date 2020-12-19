import React, { InputHTMLAttributes } from 'react';
import { Container } from '../styles/input/styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, ...rest }) => {
  return (
    <Container 
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export default Input;