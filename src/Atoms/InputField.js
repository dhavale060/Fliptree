import React from 'react';
import styled from 'styled-components';
import Label from '../common/Label';
import { ErrorMessage } from 'formik';

const InputFieldContainer = styled.div`
    width: fit-content;
    height: 60px;
    padding: 5px;x
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`
const TextField = styled.input`
    width: 320px;
    height:33px;
    padding: 6px;
    border: 1px solid gray;
    border-radius: 6px;
    outline: none;
    box-sizing:border-box
`
const ErrorMessageStyled = styled.span`
   font-size: 10px;
   margin: 3px 0px;
   width: 310px;
   max-width: 310px;
   box-sizing: border-box;
`

const InputField = ({ label, type, name, value}) => {
  return (
    <InputFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <TextField
      type={type}
      name={name}
      value={value}
      placeholder={"Enter "+ label}
    /> 
      <ErrorMessage component={ErrorMessageStyled} name={name}/>
    </InputFieldContainer>
  );
};

export default InputField;