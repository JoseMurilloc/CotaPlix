import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { Container } from '../styles/input/styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, name, ...rest }) => {

  const [ isFocus, setIsFocus ] = useState(false);
  const [ isFilled, setIsFilled ] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })    
  }, [fieldName, registerField]);
  
  const handleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, [])

  const handleInputBluer = useCallback(() => {
    
    if (inputRef.current?.value) 
      setIsFilled(true)
    else 
      setIsFilled(false)

    setIsFocus(false);
  }, []);

  return (
    <> 
      <Container 
        onFocus={handleInputFocus}
        onBlur={handleInputBluer}
        isFilled={isFilled} 
        isFocus={isFocus}
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