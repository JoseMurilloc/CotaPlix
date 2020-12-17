import React from 'react';
import { Container } from '../styles/input/styles';

interface InputProps {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <Container 
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;