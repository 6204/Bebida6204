import React, { useRef, useEffect } from 'react';
import Select from 'react-select';
import { useField } from '@unform/core';

export default function MySelect ({ name, ...rest }) {


const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
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
        if (!ref.select.state.ariaSelection.value.value) {
          return '';
        }
        return ref.select.state.ariaSelection.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <Select
      options={rest.options}
      defaultValue={defaultValue}
      placeholder='Selecione a Categoria'
      isSearchable
      isClearable
      ref={selectRef}
    />
  );
};