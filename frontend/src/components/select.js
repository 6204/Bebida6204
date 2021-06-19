import React, { useRef, useEffect } from 'react';
import Select from 'react-select';
import { useField } from '@unform/core';

export default function MySelect ({ name, ...rest }) {


const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  console.log()
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map(
            option => option.value,
          );
        }
        console.log(ref.select.state)
        if(ref.select.state.ariaSelection == null) {
          return {
            value: null,
            label: '',
          }
        } else {
          return ref.select.state.ariaSelection.value;
        }
        
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <div>
      <Select
      options={rest.options}
      defaultValue={defaultValue}
      placeholder='Selecione a Categoria'
      isSearchable
      isClearable
      ref={selectRef}
      />
      {error && <span style={{color: '#f00'}} >{error}</span>}
    </div>
  );
};