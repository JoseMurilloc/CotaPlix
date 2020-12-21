import { useField } from '@unform/core';
import { spawn } from 'child_process';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container } from '../styles/input/styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, name, ...rest }) => {
  
  const { fieldName, registerField, error } = useField(name)
  const inputRef = useRef()

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })    
  }, [fieldName, registerField]);

  return (
    <> 
      <Container 
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        isError={!!error}
        {...rest}
      />
      {/* { error && <span>{error}</span>} */}
    </>
  );
}

export default Input;