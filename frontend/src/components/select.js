import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

export default function Select({ name, ...rest }) {
  const selectRef = useRef(null);

  const categoria = [
      {
          id: 1,
          name: 'Cerveja',
      }, 
      {
          id: 2,
          name: 'Vinho',
      },
      {
          id: 3,
          name: 'Whisky',
      },
  ]
  
      

  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <select
      defaultValue={defaultValue}
      ref={selectRef}
    >
      <option value={``}> Selecione a categoria</option>
      {
        categoria.map((item, index) => (
          <option value={`${item.name}`}> {item.name}</option>
        )         
      )       
      }
    </select>  
  );
};